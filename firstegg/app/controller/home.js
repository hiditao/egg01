'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async login() {
    const { ctx } = this;
    // ctx.body = "登录页面";
    ctx.body = {"code": 1, "msg": "成功"};
  }
}

module.exports = HomeController;
