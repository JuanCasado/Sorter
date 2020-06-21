FROM node:14.4.0-stretch-slim

ENV ROOT_DIR /rest-sorter
RUN mkdir -p $ROOT_DIR/sorter && mkdir -p $ROOT_DIR/sorterRestServer
ADD sorter $ROOT_DIR/sorter
ADD sorterRestServer $ROOT_DIR/sorterRestServer

WORKDIR $ROOT_DIR/sorterRestServer
RUN yarn && yarn global add typescript && yarn global add ts-node

CMD [ "./run.sh" ]