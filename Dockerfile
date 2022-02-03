FROM node:16.13.0-alpine

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV development
RUN mkdir /src
WORKDIR /src
COPY package.json package-lock.json /src/
RUN npm i -g @nestjs/cli && npm install

ADD . /src

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
