FROM node:15

RUN mkdir -p /usr/src/clon_youtube

WORKDIR /usr/src/clon_youtube

COPY . .

RUN mv /usr/src/clon_youtube/.env.example /usr/src/clon_youtube/.env

RUN npm install

CMD ["npm", "run", "start:docker"]
EXPOSE 4000