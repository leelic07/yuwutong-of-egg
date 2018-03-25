'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 用户登录接口
  router.post('/users/login', controller.users.login);
  // 用户登出接口
  router.get('/users/logout', controller.users.logout);
  // 修改密码接口
  router.post('/users/resetPwd', controller.users.resetPwd);
};
