const Router = require("koa-router");
const router = new Router();

const loginRouter = require("./login/LoginRouter");
const registerRouter = require("./register/RegisterRouter");

router.get("/", ctx => {
  ctx.body = "Hello world";
});

router.use("/login", loginRouter.routes());
router.use("/register", registerRouter.routes());

module.exports = router;
