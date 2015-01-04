
var koa = require('koa');
var jade = require('jade');
var path = require('path');

var app = module.exports = koa();

app.use(function* () {

  var filename = path.join(__dirname, 'homepage.jade');
  var htmlBody = yield function(callback){
    console.log('Thunk Start');
    jade.renderFile(filename, callback, null);
    console.log('Thunk End');
  }

  console.log(htmlBody);
  this.response.body = htmlBody;
});
