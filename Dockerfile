
FROM ubuntu
MAINTAINER changhu <o52tiger@gmail.com>
ENV REFRESHED_AT 2016-07-12

RUN apt-get -yqq update
RUN apt-get -yqq install nodejs npm
RUN ln -s /usr/bin/nodejs /var/bin/node
RUN mkdir -p /var/log/whatisnode

ADD . /var/www/whatisnode
WORKDIR /var/www/whatisnode

RUN npm install

VOLUME ["/var/log/whatisnode"]

EXPOSE 3000

ENTRYPOINT ["nodejs", "server.js"]
