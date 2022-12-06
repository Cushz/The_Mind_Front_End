FROM node:18.12.1-alpine3.15 AS builder

WORKDIR /app

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . . 

RUN npm run build

FROM nginx:1.23-alpine AS server
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/build /usr/share/nginx/html