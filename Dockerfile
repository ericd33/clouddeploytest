FROM node:18


WORKDIR /usr/src/apps/dockerizing

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]