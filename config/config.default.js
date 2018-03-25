'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1521887366586_1940';

  // add your config here
  config.middleware = [];

  // mysql
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'yuwutong',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  // csrf security
  config.security = {
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: ctx => ctx.ip === '127.0.0.1' || 'localhost',
    },
  };

  // session
  config.session = {
    key: 'EGG_SESS',
    maxAge: 2 * 3600 * 1000, // 2 小时
    httpOnly: true,
    encrypt: true,
  };

  return config;
};
