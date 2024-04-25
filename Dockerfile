FROM node:alpine

WORKDIR /Users/ayyappan/my-app/src/app

COPY . /Users/ayyappan/my-app/src/app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]