FROM node:20 AS build-backend

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20

WORKDIR /app

COPY --from=build-backend /app/dist ./dist

COPY package*.json ./

RUN npm install --only=production

CMD ["node", "dist/main"]