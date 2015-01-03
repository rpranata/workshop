
var koa = require('koa');

var app = module.exports = koa();

/**
 * Return "hello world" as a string on every request.
 * Hint: this only requires a single line of code.
 */

var response = function *(){
    this.response.body = "Hello World!"
}
app.use(response);
