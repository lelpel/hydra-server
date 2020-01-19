const Router = require("koa-router");
const router = new Router();

const controller = require("./LoginController");

router.get("/", controller.login);

module.exports = router;
