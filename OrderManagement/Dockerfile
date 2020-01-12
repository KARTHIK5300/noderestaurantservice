FROM node:alpine

WORKDIR /usr/nodeapp

COPY package*.json ./

RUN npm install pm2 -g

RUN npm install

EXPOSE 3004

COPY . .

RUN npm run build

CMD [ "pm2-runtime", "./ecosystem.config.js"]