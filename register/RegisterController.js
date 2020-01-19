const service = require("./RegisterService.js");

exports.register = async ctx => {
  const { challenge } = ctx.request.query;
  const { login, password } = ctx.request.body;

  // validation HUH
  const result = await service.register(challenge, login);

  if (result) {
    ctx.body = result;
  } else {
    ctx.status = 400;
    ctx.body = "WRONG";
  }
};

//module.exports = register;
