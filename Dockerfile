FROM node:latest

RUN  npm install -g @angular/cli 

COPY  . /tmp/

WORKDIR /tmp

RUN npm install --force

RUN ls -lrt

ENTRYPOINT ["sh", "-c", "ng serve --host 0.0.0.0 --port 4200"]