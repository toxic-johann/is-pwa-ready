const view = require('koa-view');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const locale = require('./middleware/locale');
const router = require('./middleware/router');
const util = require('./middleware/util');
const app = new Koa();
app.use(view('./views'));
app.use(bodyParser());
app.use(util);
app.use(locale);
app.use(router.install);
app.listen(3000);
