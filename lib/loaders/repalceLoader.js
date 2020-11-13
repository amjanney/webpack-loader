//! 自定义loader
// loader本质就是一个函数，但是不能箭头函数
// loader是处理模块的
module.exports = function (source) {
  // source 接受一段源代码
  console.log(source);
  //一定要有返回值
  return source.replace('janney', '朽木白');
};
