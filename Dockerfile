FROM node:lts

WORKDIR /app
COPY package.json ./

RUN cd /tmp && \
    curl -#L https://github.com/tj/node-prune/releases/download/v1.0.1/node-prune_1.0.1_linux_amd64.tar.gz | tar -xvzf- && \
    mv -v node-prune /usr/local/bin && rm -rvf

RUN yarn install && node-prune

COPY . ./

ENV HOST 0.0.0.0
CMD ["npm", "start"]