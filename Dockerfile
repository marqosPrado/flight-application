FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

RUN npm run migration:generate && \
    npm run migration:run 

CMD ["node", "dist/server.js"]

