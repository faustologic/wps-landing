FROM node:12.13-alpine as builder
WORKDIR /app
COPY package.json yarn.lock  /app/
RUN yarn install --pure-lockfile
COPY . /app
RUN yarn run build

FROM nginx:1.17-alpine as app

COPY --from=builder /app/build /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/