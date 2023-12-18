FROM node:14.21.3
WORKDIR /app
COPY . /app/
RUN rm -rf package-lock.json
RUN rm -rf node_modules
RUN npm install
EXPOSE 8000
CMD npm start