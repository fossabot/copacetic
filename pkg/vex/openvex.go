package vex

import (
	"bytes"
	"os"
	"time"

	"github.com/openvex/go-vex/pkg/vex"
	"github.com/project-copacetic/copacetic/pkg/pkgmgr"
	"github.com/project-copacetic/copacetic/pkg/types"
)

// used for testing mock time and id.
var (
	now = time.Now
	v   = &vex.VEX{
		Metadata: vex.Metadata{
			Context: vex.Context,
			Author:  "Project Copacetic",
			Tooling: "Project Copacetic",
			Version: 1,
		},
	}
	id func() (string, error) = v.GenerateCanonicalID
)

type OpenVex struct{}

func (o *OpenVex) CreateVEXDocument(updates *types.UpdateManifest, pkgmgr pkgmgr.PackageManager) (string, error) {
	t := now()
	doc := v
	doc.Timestamp = &t

	// set author from environment variable if it exists
	author := os.Getenv("COPA_VEX_AUTHOR")
	if author != "" {
		doc.Metadata.Author = author
	}

	id, err := id()
	if err != nil {
		return "", err
	}
	doc.Metadata.ID = id

	pkgType := pkgmgr.GetPackageType()
	for _, u := range updates.Updates {
		product := vex.Product{
			Component: vex.Component{
				// syntax is "pkg:<pkgType>/<osType>/<packageName>@<installedVersion>?arch=<arch>"
				ID: "pkg:" + pkgType + "/" + updates.OSType + "/" + u.Name + "@" + u.FixedVersion + "?arch=" + updates.Arch,
			},
		}

		// if vulnerable id already exists, append to existing statement
		found := false
		for i := range doc.Statements {
			if doc.Statements[i].Vulnerability.ID == u.VulnerabilityID {
				found = true
				doc.Statements[i].Products = append(doc.Statements[i].Products, product)
			}
		}
		if found {
			continue
		}

		// otherwise, create new statement
		doc.Statements = append(doc.Statements, vex.Statement{
			Vulnerability: vex.Vulnerability{
				ID: u.VulnerabilityID,
			},
			Products: []vex.Product{
				product,
			},
			Status: "fixed",
		})
	}

	var buf bytes.Buffer
	err = doc.ToJSON(&buf)
	if err != nil {
		return "", err
	}

	return buf.String(), nil
}
