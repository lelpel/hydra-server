const service = require("./LoginService");

exports.login = ctx => {
  const { challenge } = ctx.request.query;

  const result = service.login(challenge);

  if (result) {
    ctx.body = result;
  } else {
    ctx.status = 400;
    ctx.body = "WRONG";
  }
};
