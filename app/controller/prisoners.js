/**
 * Created by Administrator on 2018/3/25 0025.
 */
'use strict';

const Controller = require('egg').Controller;

class PrisonersController extends Controller {
  // 分页查询罪犯信息列表
  async page() {
    const params = this.ctx.request.query;
    const prisonersInfo = {};
    const pagination = {};
    pagination.page = Number(params.page) || 1;
    pagination.rows = Number(params.rows) || 10;
    params.name && (prisonersInfo.name = params.name);
    params.prisonerNumber && (prisonersInfo.prisoner_number = params.prisoner_number);
    const result = await this.ctx.service.prisoners.page(pagination, prisonersInfo);
    this.ctx.body = {
      code: 200,
      msg: '分页查询罪犯信息成功',
      data: result,
    };
  }
}

module.exports = PrisonersController;
