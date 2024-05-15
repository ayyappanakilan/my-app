FROM node:latest



COPY  /src /tmp

EXPOSE 15000

WORKDIR /tmp

RUN npm install -g @angular/cli 

ENTRYPOINT ["ng serve"]