
var fs = require('fs');
var koa = require('koa');

var app = module.exports = koa();

/**
 * Create a yieldable version of `fs.stat()`:
 *
 *   app.use(function* () {
 *     var stats = yield exports.stat(__filename);
 *   })
 *
 * Hint: you can return a yieldable.
 */

stat = function (filename) {
  return function(callback) {
    fs.stat(filename, callback);
  };
};

exists = function (filename) {
  return function(callback) {
    fs.stat(filename, function(err, result){
      var exist = !!result;
      callback(null, exist);
    })
  };
};

/**
 * Create the `GET /stream` route that streams this file.
 * In node.js, the current file is available as a variable `__filename`.
 */

app.use(function* (next) {
  if (this.request.path !== '/stream') return yield* next;

  var file_status = yield stat(__filename)
  this.response.length = file_status.size
  this.response.type = "application/javascript";
  this.response.body = fs.createReadStream(__filename);
});

/**
 * Create the `GET /json` route that sends `{message:'hello world'}`.
 */

app.use(function* (next) {
  if (this.request.path !== '/json') return yield* next;

  this.response.body = { message : "hello world" };
});
