
FROM node:10
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install
RUN npm install -g serve
COPY --chown=node:node . .

EXPOSE 3001

#CMD [ "npm", "start"]
CMD [ "serve","-l" ,"3001" "-s","build"]