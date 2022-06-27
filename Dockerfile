FROM node:latest

WORKDIR /var/www
COPY ./server.js server.js
COPY ./dist dist

EXPOSE 3000

RUN npm install express
CMD node server.js