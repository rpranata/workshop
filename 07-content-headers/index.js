
var koa = require('koa');

var app = module.exports = koa();

app.use(function* (next) {
    if (!this.request.is('json')) return yield next;

    this.response.type = 'application/json';
    this.response.body = { message : 'hi!' };
})

app.use(function* (next) {
    if (this.request.is('json')) return yield next;
    this.response.body = 'ok';
})
