FROM node:14.4.0-stretch-slim

ENV ROOT_DIR /ws-sorter
RUN mkdir -p $ROOT_DIR/sorter && mkdir -p $ROOT_DIR/sorterWsServer
ADD sorter/ $ROOT_DIR/sorter
ADD sorterWsServer/ $ROOT_DIR/sorterWsServer

WORKDIR $ROOT_DIR/sorterWsServer
RUN yarn && yarn global add typescript && yarn global add ts-node

CMD [ "./run.sh" ]