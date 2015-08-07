import Maybe from '../lib/maybe';
import {assert} from 'chai';
import util from 'util';
import * as _ from 'ramda';

describe('Maybe', () => {
  describe('#of', () => {
    it('should return a Maybe of number', () => {
      assert.instanceOf(
        Maybe.of(3),
        Maybe
      );
    });

    it('should return a Maybe of string', () => {
      assert.instanceOf(
        Maybe.of('hotdogs'),
        Maybe
      );
    });

    it('should return a Maybe of a Maybe of Object', () => {
      assert.instanceOf(
        Maybe.of(Maybe.of({ name: 'yoda' })),
        Maybe
      );
    });
  });

  describe('#inspect', () => {
    it('should output a Maybe of number', () => {
      assert.strictEqual(
        util.inspect(Maybe.of(3)),
        'Maybe.of(3)'
      );
    });

    it('should output a Maybe of string', () => {
      assert.strictEqual(
        util.inspect(Maybe.of('hotdogs')),
        'Maybe.of(\'hotdogs\')'
      );
    });

    it('should output a Maybe of a Maybe of Object', () => {
      assert.strictEqual(
        util.inspect(Maybe.of(Maybe.of({ name: 'yoda' }))),
        'Maybe.of(Maybe.of({"name":"yoda"}))'
      );
    });
  });

  describe('#isNothing', () => {
    it('should return true for null value', () => {
      assert.isTrue(Maybe.of(null).isNothing());
    });

    it('should return true for undefined value', () => {
      assert.isTrue(Maybe.of(undefined).isNothing());
    });

    it('should return false for non-null value', () => {
      assert.isFalse(Maybe.of(3).isNothing());
    });
  });

  describe('#map', () => {
    it('should map to a Maybe of number', () => {
      assert.deepEqual(
        Maybe.of(2).map(function(two) { return two + 2 }),
        Maybe.of(4)
      );
    });

    it('should map to a Maybe of string', () => {
      assert.deepEqual(
        Maybe.of("flamethrowers").map(function(s) { return s.toUpperCase() }),
        Maybe.of('FLAMETHROWERS')
      );
    });

    it('should chain successive #map', () => {
      assert.deepEqual(
        Maybe.of("bombs").map(_.concat(' away')).map(_.prop('length')),
        Maybe.of(10)
      );
    });
  });
});
