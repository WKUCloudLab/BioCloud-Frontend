FROM node:8.15-jessie
ADD . /code
WORKDIR /code
# There's currently conflicts within package-lock.json
RUN rm package-lock.json
RUN npm install
RUN npm install -g @angular/cli
RUN ng build
RUN npm i -g http-server --save
CMD ["http-server", "./dist"]
