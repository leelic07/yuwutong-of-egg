/**
 * Created by Administrator on 2018/3/25 0025.
 */
'use strict';

const cors = require('koa2-cors');

module.exports = app => {
  // cors 跨域请求
  app.use(cors({
    origin(ctx) {
      return ctx.request.header.origin;
    },
    exposeHeaders: [ 'WWW-Authenticate', 'Server-Authorization' ],
    maxAge: 5,
    credentials: true,
    allowMethods: [ 'GET', 'POST', 'DELETE', 'OPTIONS' ],
    allowHeaders: [ 'Content-Type', 'Authorization', 'Accept' ],
  }));
};
