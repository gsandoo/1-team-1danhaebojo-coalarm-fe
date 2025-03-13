FROM krmp-d2hub-idock.9rum.cc/goorm/node:16

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm cache clean --force
RUN npm install --legacy-peer-deps
RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build"]
