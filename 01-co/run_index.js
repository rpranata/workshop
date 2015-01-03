//var index = require('./index.js');
//var co = require('co');
//
//function *generator() {
//    console.log("fuck 1");
//    var abc = yield function(callback) {
//        callback("fuck 2");
//    }
//    console.log(abc);
//    console.log("fuck 4");
//}
//
//var my_generator = generator();
//my_generator.next().value(function(value){
//   console.log(value);
//});
//my_generator.next("fuck 3");
//
//co(function *(){
//    var stat = yield index.stat(__filename);
//    console.log(stat)
//})();
