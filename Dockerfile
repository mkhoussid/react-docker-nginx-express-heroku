FROM node:14.1-alpine AS builder

WORKDIR /opt/web

RUN mkdir server
RUN mkdir client

COPY package.json server/package.json
COPY client/package.json client/package.json

RUN npm install --prefix server

RUN npm install --prefix client

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./

RUN npm run build --prefix client

FROM nginx:1.17-alpine
RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
COPY ./nginx.config /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
COPY --from=builder /opt/web/client/build /usr/share/nginx/html
