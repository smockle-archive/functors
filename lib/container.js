import util from 'util';

let Container = function (x) {
  this.__value = x;
};

Container.of = function(x) {
  return new Container(x);
};

Container.prototype.inspect = function() {
  const tag = function(literals, ...values) {
    if (typeof values[1] === 'number')
      values[1] = `${values[1]}`;
    else if (typeof values[1] === 'string')
      values[1] = `'${values[1]}'`;
    else if (values[1] instanceof Container)
      values[1] = `${util.inspect(values[1])}`;
    else
      values[1] = `${JSON.stringify(values[1])}`;
    return `${values[0]}${literals[1]}${values[1]}${literals[2]}`;
  };
  return tag`${this.constructor.name}.of(${this.__value})`;
};

Container.prototype.map = function(f) {
  return Container.of(f(this.__value));
};

export default Container;
