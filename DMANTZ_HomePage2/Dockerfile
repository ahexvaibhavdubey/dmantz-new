FROM node:8
LABEL "name"="sample"
ADD . getting-started
WORKDIR /getting-started
RUN npm install
EXPOSE 3004
CMD [ "npm", "start" ]
