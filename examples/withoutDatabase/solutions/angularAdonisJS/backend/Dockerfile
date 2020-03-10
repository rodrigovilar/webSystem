FROM node:12.16.1-buster

WORKDIR /home/app

COPY package.json .

RUN npm install
# --silent --progress=false

COPY . .

CMD [ "npm", "start" ]
