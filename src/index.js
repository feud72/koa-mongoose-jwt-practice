const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 4000;

router.get("/", (ctx, next) => {
  ctx.body = "홈";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
