const Koa = require("koa");
var bodyParser = require("koa-bodyparser");
var app = new Koa();
app.use(bodyParser());

const router = require("./routes");

app.use(router.routes());

app.listen(3001);
