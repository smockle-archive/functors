import Container from './container';

let Maybe = function (x) {
  let maybe = Object.create(Maybe.prototype);
  maybe.__value = x;
  return maybe;
};

Maybe.prototype = Object.create(Container.prototype);
Maybe.prototype.constructor = Maybe;

Maybe.prototype.isNothing = function() {
  return (this.__value === null || typeof this.__value === 'undefined');
};

Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe(null) : Maybe(f(this.__value));
};

export default Maybe;
