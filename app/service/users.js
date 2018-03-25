/**
 * Created by Administrator on 2018/3/25 0025.
 */
'use strict';

const Service = require('egg').Service;

class UsersService extends Service {
  // 用户登录
  async login(userInfo) {
    const jail = await this.app.mysql.get('jails', { prison: userInfo.prison });
    if (jail) {
      const user = await this.app.mysql.select('users', {
        where: { jail_id: jail.id, salt: userInfo.salt, hashed_password: userInfo.hashed_password },
        columns: [ 'id', 'role', 'jail_id', 'username' ],
      });
      if (user.length) {
        user[0].jailName = jail.title;
        return this.ctx.helper.transformArr(user)[0];
      } return {};
    } return {};
  }
  // 修改密码
  async resetPwd(resetInfo) {
    const old_password = resetInfo.old_password,
      new_password = resetInfo.new_password,
      id = this.ctx.session.user_id;
    const result = await this.app.mysql.query('update users set hashed_password = ? where id = ? and hashed_password = ?', [ new_password, id, old_password ]);
    return result;
  }
}

module.exports = UsersService;
