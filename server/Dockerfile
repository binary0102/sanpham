
FROM node:10
RUN mkdir -p /home/node/app/node_modules 

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY  . .

EXPOSE 3000

CMD [ "npm", "start"]