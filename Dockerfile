FROM node:8.15-jessie
ADD . /code
WORKDIR /code
RUN npm install
RUN ng build
RUN npm i -g http-server --save
CMD ["http-server", "./dist"]
