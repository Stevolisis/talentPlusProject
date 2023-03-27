FROM node:latest
WORKDIR /project
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm","run","dev"]
