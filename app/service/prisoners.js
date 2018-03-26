/**
 * Created by Administrator on 2018/3/25 0025.
 */
'use strict';

const Service = require('egg').Service;

class PrisonersService extends Service {
  // 分页查询罪犯信息列表
  async page(pagination = {}, prisonersInfo = {}) {
    const prisoners = await this.app.mysql.select('prisoners', {
      where: prisonersInfo,
      limit: pagination.rows,
      offset: (pagination.page - 1) * pagination.rows,
    });
    const prisonersSize = await this.app.mysql.select('prisoners', { where: prisonersInfo });
    return {
      prisoners: this.ctx.helper.transformArr(prisoners),
      prisonersSize: prisonersSize.length,
    };
  }
}

module.exports = PrisonersService;
