//

/**
 * ! 自定义loader
 * loader本质就是一个函数，但是不能箭头函数
 * loader是处理模块的
 * 一定要有返回值
 * @param source - 接收的源代码
 * @param this.query - 接口的外部参数
 * @return 返回操作之后的源代码
 */

module.exports = function (source) {
  // console.log(source);
  console.log(this.query);
  // 拿到源码内容，然后进行操作
  return source.replace('janney', '朽木白');
};
