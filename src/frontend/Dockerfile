FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "-e", "require('http').createServer((req,res)=>res.end('Frontend Running!')).listen(3000)"]