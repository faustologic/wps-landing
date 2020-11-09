FROM node:12.13-alpine as builder
WORKDIR /app
COPY package.json package-lock.json  /app/
RUN npm install 
COPY . /app
RUN npm run build

FROM nginx:1.17-alpine as app

COPY --from=builder /app/build /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/