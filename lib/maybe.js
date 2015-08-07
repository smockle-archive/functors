import Container from './container';

let Maybe = function(x) {
  Container.call(this, x);
};

Maybe.of = function(x) {
  return new Maybe(x);
};

Maybe.prototype = Object.create(Container.prototype);
Maybe.prototype.constructor = Maybe;

Maybe.prototype.isNothing = function() {
  return (this.__value === null || typeof this.__value === 'undefined');
};

Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
};

export default Maybe;
