/**
 * Created by Administrator on 2018/3/25 0025.
 */
'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  // 用户登录
  async login() {
    const body = this.ctx.request.body;
    const userInfo = {
      salt: body.username,
      hashed_password: body.password,
      prison: body.prison,
    };
    const user = await this.ctx.service.users.login(userInfo);
    if (JSON.stringify(user) !== '{}') {
      this.ctx.session = {
        user_id: user.id,
        jail_id: user.jail_id,
      };
      this.ctx.body = {
        code: 200,
        msg: '登录成功',
        data: { users: user },
      };
    } else {
      this.ctx.body = {
        code: 500,
        msg: '用户名或者密码不正确',
        data: {},
      };
    }
  }

  // 用户登出
  async logout() {
    this.ctx.session = null;
    if (!this.ctx.session) {
      this.ctx.body = {
        code: 200,
        msg: '退出登录成功',
        data: {},
      };
    } else {
      this.ctx.body = {
        code: 500,
        msg: '退出登录失败',
        data: {},
      };
    }
  }

  // 修改密码
  async resetPwd() {
    const body = this.ctx.request.body;
    const result = await this.ctx.service.users.resetPwd(body);
    if (result.affectedRows === 1) {
      this.ctx.body = {
        code: 200,
        msg: '修改密码成功',
        data: {},
      };
    } else {
      this.ctx.body = {
        code: 500,
        msg: '修改密码失败,或者原始密码不正确',
        data: {},
      };
    }
  }
}

module.exports = UsersController;
