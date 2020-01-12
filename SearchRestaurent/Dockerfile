FROM node:alpine

WORKDIR /usr/nodeapp

COPY package*.json ./

RUN npm install pm2 -g

RUN npm install

EXPOSE 3005

COPY . .

CMD [ "pm2-runtime", "./ecosystem.config.js"]