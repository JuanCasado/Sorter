FROM node:14.4.0-stretch-slim

ENV ROOT_DIR /sorter
RUN mkdir $ROOT_DIR
ADD sorter/ $ROOT_DIR

WORKDIR $ROOT_DIR/sorter
RUN yarn && yarn build

FROM nginx:1.19.0

COPY --from=0 /sorter/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]