FROM node:12-alpine3.12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3004

CMD ["npm", "run", "swagger-autogen"]