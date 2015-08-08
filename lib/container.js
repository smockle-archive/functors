import util from 'util';

let Container = function (x) {
  let container = Object.create(Container.prototype);
  container.__value = x;
  return container;
};

Container.prototype.inspect = function() {
  const tag = (literals, ...values) => {
    if (typeof values[1] === 'number')
      values[1] = `${values[1]}`;
    else if (typeof values[1] === 'string')
      values[1] = `'${values[1]}'`;
    else if (values[1] instanceof this.constructor)
      values[1] = `${util.inspect(values[1])}`;
    else
      values[1] = `${JSON.stringify(values[1])}`;
    return `${values[0]}${literals[1]}${values[1]}${literals[2]}`;
  };
  return tag`${this.constructor.name}(${this.__value})`;
};

Container.prototype.map = function(f) {
  return Container(f(this.__value));
};

export default Container;
