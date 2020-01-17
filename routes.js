const Router = require("koa-router");
const router = new Router();

const loginRouter = require("./login/LoginRouter");
const registerRouter = require("./login/RegisterRouter");

router.use("/login", loginRouter.routes());
router.use("/register", registerRouter.routes());

module.exports = router;
