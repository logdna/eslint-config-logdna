ARG NODE_VERSION=14
FROM us.gcr.io/logdna-k8s/node:${NODE_VERSION}

WORKDIR /data

RUN npm install eslint-config-logdna eslint --save-dev
