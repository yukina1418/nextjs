FROM node:14


WORKDIR /f6b2-team8-client/
COPY ./package.json /f6b2-team8-client/
COPY ./yarn.lock /f6b2-team8-client/
COPY . /f6b2-team8-client/

RUN yarn install
RUN yarn build:ssr
CMD yarn start


