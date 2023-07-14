FROM node:18.16.0-alpine as BUILD_IMAGE

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]


FROM node:18.16.0-alpine as PRODUCT_IMAGE

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "build"]
