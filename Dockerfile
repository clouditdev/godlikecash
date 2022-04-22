FROM node:14

RUN mkdir /godlikecash_frontend

WORKDIR /godlikecash_frontend

COPY ./package.json /godlikecash_frontend

RUN npm install

COPY . /godlikecash_frontend

RUN npm run build

CMD ["npm", "start"]