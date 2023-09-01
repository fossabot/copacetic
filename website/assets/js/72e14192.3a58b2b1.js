"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={title:"Quick Start"},o=void 0,l={unversionedId:"quick-start",id:"quick-start",title:"Quick Start",description:"This sample illustrates how to patch containers using vulnerability reports with copa.",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/copacetic/website/next/quick-start",draft:!1,tags:[],version:"current",frontMatter:{title:"Quick Start"},sidebar:"sidebar",previous:{title:"Installation",permalink:"/copacetic/website/next/installation"},next:{title:"Output",permalink:"/copacetic/website/next/output"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sample Steps",id:"sample-steps",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This sample illustrates how to patch containers using vulnerability reports with ",(0,a.kt)("inlineCode",{parentName:"p"},"copa"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An Ubuntu 22.04 VM configured through the ",(0,a.kt)("a",{parentName:"li",href:"/copacetic/website/next/installation"},"setup instructions"),". This includes:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"copa")," tool ",(0,a.kt)("a",{parentName:"li",href:"/copacetic/website/next/installation"},"built & pathed"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/moby/buildkit/#quick-start"},"buildkit")," daemon installed & pathed. ",(0,a.kt)("a",{parentName:"li",href:"#buildkit-connection-examples"},"Examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/linux/install/#generic-installation-steps"},"docker")," daemon running and CLI installed & pathed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aquasecurity.github.io/trivy/latest/getting-started/installation/"},"trivy CLI")," installed & pathed.")))),(0,a.kt)("h2",{id:"sample-steps"},"Sample Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Scan the container image for patchable OS vulnerabilities, outputting the results to a JSON file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"trivy image --vuln-type os --ignore-unfixed -f json -o nginx.1.21.6.json docker.io/library/nginx:1.21.6\n")),(0,a.kt)("p",{parentName:"li"},"You can also see the existing patchable vulnerabilities in table form on the shell with:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"trivy image --vuln-type os --ignore-unfixed docker.io/library/nginx:1.21.6\n\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To patch the image, use the Trivy report and specify a buildkit instance to connect to:"),(0,a.kt)("p",{parentName:"li"},"By default copa will attempt to auto-connect to an instance in order:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Default docker buildkit endpoint (requires at least docker v24.0 with ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/containerd/#enable-containerd-image-store-on-docker-engine"},"containerd snapshotter")," support enabled)"),(0,a.kt)("li",{parentName:"ol"},"Currently selected buildx builder (see: ",(0,a.kt)("inlineCode",{parentName:"li"},"docker buildx --help"),")"),(0,a.kt)("li",{parentName:"ol"},"buildkit daemon at the default address ",(0,a.kt)("inlineCode",{parentName:"li"},"/run/buildkit/buildkitd.sock"))),(0,a.kt)("p",{parentName:"li"},"If an instance doesn't exist or that instance doesn't support all the features copa needs the next will be attempted.\nYou may need to specify a custom address using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--addr")," flag. Here are the supported formats:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unix:///path/to/buildkit.sock")," - Connect to buildkit over unix socket."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tcp://$BUILDKIT_ADDR:$PORT")," - Connec to buildkit over TCP. (not recommended for security reasons)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docker://<docker connection spec>")," - Connect to docker, currently only unix sockets are supported, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"docker://unix:///var/run/docker.sock")," (or just ",(0,a.kt)("inlineCode",{parentName:"li"},"docker://"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docker-container://my-buildkit-container")," - Connect to a buildkitd running in a docker container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"buildx://my-builder")," - Connect to a buildx builder (or ",(0,a.kt)("inlineCode",{parentName:"li"},"buildx://")," for the currently selected builder). ",(0,a.kt)("em",{parentName:"li"},"Note: only container-backed buildx instances are currently supported")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nerdctl-container://my-container-name")," - Similar to ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-container")," but uses ",(0,a.kt)("inlineCode",{parentName:"li"},"nerdctl"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"podman-container://my-container-name")," - Similar to ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-container")," but uses ",(0,a.kt)("inlineCode",{parentName:"li"},"podman"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ssh://myhost")," - Connect to a buildkit instance over SSH. Format of the host spec should mimic the SSH command."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubepod://mypod")," - Connect to buildkit running in a Kubernetes pod. Can also specify kubectl context and pod namespace (",(0,a.kt)("inlineCode",{parentName:"li"},"kubepod://mypod?context=foo&namespace=notdefault"),").")),(0,a.kt)("h4",{parentName:"li",id:"buildkit-connection-examples"},"Buildkit Connection Examples"),(0,a.kt)("p",{parentName:"li"},"Example: Connect using defaults:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"copa patch -i docker.io/library/nginx:1.21.6 -r nginx.1.21.6.json -t 1.21.6-patched\n")),(0,a.kt)("p",{parentName:"li"},"Example: Connect to buildx"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"docker buildx create --name demo\ncopa patch -i docker.io/library/nginx:1.21.6 -r nginx.1.21.6.json -t 1.21.6-patched --addr buildx://demo\n")),(0,a.kt)("p",{parentName:"li"},"Example: Buildkit in a container"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'export BUILDKIT_VERSION=v0.12.0\ndocker run \\\n    --detach \\\n    --rm \\\n    --privileged \\\n    --name buildkitd \\\n    --entrypoint buildkitd \\\n    "moby/buildkit:$BUILDKIT_VERSION"\n\ncopa patch -i docker.io/library/nginx:1.21.6 -r nginx.1.21.6.json -t 1.21.6-patched --addr docker-container://buildkitd\n')),(0,a.kt)("p",{parentName:"li"},"Example: Buildkit over TCP"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'export BUILDKIT_VERSION=v0.12.0\n export BUILDKIT_PORT=8888\n docker run \\\n     --detach \\\n     --rm \\\n     --privileged \\\n     -p 127.0.0.1:$BUILDKIT_PORT:$BUILDKIT_PORT/tcp \\\n     --name buildkitd \\\n     --entrypoint buildkitd \\\n     "moby/buildkit:$BUILDKIT_VERSION" \\\n     --addr tcp://0.0.0.0:$BUILDKIT_PORT\n copa patch \\\n     -i docker.io/library/nginx:1.21.6 \\\n     -r nginx.1.21.6.json \\\n     -t 1.21.6-patched \\\n     -a tcp://0.0.0.0:$BUILDKIT_PORT\n')),(0,a.kt)("p",{parentName:"li"},"In either case, ",(0,a.kt)("inlineCode",{parentName:"p"},"copa")," is non-destructive and exports a new image with the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"1.21.6-patched")," label to the local Docker daemon."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," if you're running this sample against an image from a private registry instead,\nensure that the credentials are configured in the default Docker config.json before running ",(0,a.kt)("inlineCode",{parentName:"p"},"copa patch"),",\nfor example, via ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo docker login -u <user> -p <password> <registry>"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Scan the patched image and verify that the vulnerabilities have been patched:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"trivy image --vuln-type os --ignore-unfixed docker.io/library/nginx:1.21.6-patched\n")),(0,a.kt)("p",{parentName:"li"},"You can also inspect the structure of the patched image with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker history")," to see the new patch layer appended to the image:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker history docker.io/library/nginx:1.21.6-patched\nIMAGE          CREATED        CREATED BY                                      SIZE      COMMENT\na372df41e06d   1 minute ago   mount / from exec sh -c apt install --no-ins\u2026   26.1MB    buildkit.exporter.image.v0\n<missing>      3 months ago   CMD ["nginx" "-g" "daemon off;"]                0B        buildkit.dockerfile.v0\n<missing>      3 months ago   STOPSIGNAL SIGQUIT                              0B        buildkit.dockerfile.v0\n<missing>      3 months ago   EXPOSE map[80/tcp:{}]                           0B        buildkit.dockerfile.v0\n<missing>      3 months ago   ENTRYPOINT ["/docker-entrypoint.sh"]            0B        buildkit.dockerfile.v0\n<missing>      3 months ago   COPY 30-tune-worker-processes.sh /docker-ent\u2026   4.61kB    buildkit.dockerfile.v0\n<missing>      3 months ago   COPY 20-envsubst-on-templates.sh /docker-ent\u2026   1.04kB    buildkit.dockerfile.v0\n<missing>      3 months ago   COPY 10-listen-on-ipv6-by-default.sh /docker\u2026   1.96kB    buildkit.dockerfile.v0\n<missing>      3 months ago   COPY docker-entrypoint.sh / # buildkit          1.2kB     buildkit.dockerfile.v0\n<missing>      3 months ago   RUN /bin/sh -c set -x     && addgroup --syst\u2026   61.1MB    buildkit.dockerfile.v0\n<missing>      3 months ago   ENV PKG_RELEASE=1~bullseye                      0B        buildkit.dockerfile.v0\n<missing>      3 months ago   ENV NJS_VERSION=0.7.0                           0B        buildkit.dockerfile.v0\n<missing>      3 months ago   ENV NGINX_VERSION=1.20.2                        0B        buildkit.dockerfile.v0\n<missing>      3 months ago   LABEL maintainer=NGINX Docker Maintainers <d\u2026   0B        buildkit.dockerfile.v0\n<missing>      4 months ago   /bin/sh -c #(nop)  CMD ["bash"]                 0B\n<missing>      4 months ago   /bin/sh -c #(nop) ADD file:09675d11695f65c55\u2026   80.4MB\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the container to verify that the image has no regressions:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker run -it --rm --name nginx-test docker.io/library/nginx:1.21.6-patched\n/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration\n/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/\n/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh\n10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf\n10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf\n/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh\n/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh\n/docker-entrypoint.sh: Configuration complete; ready for start up\n2022/05/16 18:00:17 [notice] 1#1: using the "epoll" event method\n2022/05/16 18:00:17 [notice] 1#1: nginx/1.20.2\n2022/05/16 18:00:17 [notice] 1#1: built by gcc 10.2.1 20210110 (Debian 10.2.1-6)\n2022/05/16 18:00:17 [notice] 1#1: OS: Linux 5.10.102.1-microsoft-standard-WSL2\n2022/05/16 18:00:17 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576\n2022/05/16 18:00:17 [notice] 1#1: start worker processes\n2022/05/16 18:00:17 [notice] 1#1: start worker process 31\n2022/05/16 18:00:17 [notice] 1#1: start worker process 32\n2022/05/16 18:00:17 [notice] 1#1: start worker process 33\n2022/05/16 18:00:17 [notice] 1#1: start worker process 34\n2022/05/16 18:00:17 [notice] 1#1: start worker process 35\n2022/05/16 18:00:17 [notice] 1#1: start worker process 36\n2022/05/16 18:00:17 [notice] 1#1: start worker process 37\n2022/05/16 18:00:17 [notice] 1#1: start worker process 38\n2022/05/16 18:00:17 [notice] 38#38: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 36#36: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 33#33: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 32#32: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 34#34: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 35#35: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 37#37: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 1#1: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 31#31: signal 28 (SIGWINCH) received\n')),(0,a.kt)("p",{parentName:"li"},"You can stop the container by opening a new shell instance and running: ",(0,a.kt)("inlineCode",{parentName:"p"},"docker stop nginx-test")))))}d.isMDXComponent=!0}}]);