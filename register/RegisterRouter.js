const Router = require("koa-router");
const router = new Router();

const controller = require("./RegisterController");

router.post("/", controller.register);

module.exports = router;
