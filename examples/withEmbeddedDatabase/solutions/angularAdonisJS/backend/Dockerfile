# BUILD
FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

# RUN
EXPOSE 3333

CMD ["npm", "start"]
