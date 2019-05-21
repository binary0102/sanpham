
FROM node:10
RUN mkdir -p /home/node/app/node_modules && chown -R root:root /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER root

RUN npm install
RUN npm install --save serve
COPY --chown=root:root . .

EXPOSE 3001
#RUN serve -l 3001 -s build
CMD [ "npm", "dev"]
#CMD [ "serve","-l" ,"3001" "-s","build"]