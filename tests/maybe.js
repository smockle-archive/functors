import Maybe from '../lib/maybe';
import {assert} from 'chai';
import util from 'util';
import * as _ from 'ramda';

describe('Maybe', () => {
  describe('#constructor', () => {
    it('should return a Maybe of number', () => {
      assert.instanceOf(
        Maybe(3),
        Maybe
      );
    });

    it('should return a Maybe of string', () => {
      assert.instanceOf(
        Maybe('hotdogs'),
        Maybe
      );
    });

    it('should return a Maybe of a Maybe of Object', () => {
      assert.instanceOf(
        Maybe(Maybe({ name: 'yoda' })),
        Maybe
      );
    });
  });

  describe('#inspect', () => {
    it('should output a Maybe of number', () => {
      assert.strictEqual(
        util.inspect(Maybe(3)),
        'Maybe(3)'
      );
    });

    it('should output a Maybe of string', () => {
      assert.strictEqual(
        util.inspect(Maybe('hotdogs')),
        'Maybe(\'hotdogs\')'
      );
    });

    it('should output a Maybe of a Maybe of Object', () => {
      assert.strictEqual(
        util.inspect(Maybe(Maybe({ name: 'yoda' }))),
        'Maybe(Maybe({"name":"yoda"}))'
      );
    });
  });

  describe('#isNothing', () => {
    it('should return true for null value', () => {
      assert.isTrue(Maybe(null).isNothing());
    });

    it('should return true for undefined value', () => {
      assert.isTrue(Maybe(undefined).isNothing());
    });

    it('should return false for non-null value', () => {
      assert.isFalse(Maybe(3).isNothing());
    });
  });

  describe('#map', () => {
    it('should map to a Maybe of number', () => {
      assert.deepEqual(
        Maybe(2).map(function(two) { return two + 2 }),
        Maybe(4)
      );
    });

    it('should map to a Maybe of string', () => {
      assert.deepEqual(
        Maybe("flamethrowers").map(function(s) { return s.toUpperCase() }),
        Maybe('FLAMETHROWERS')
      );
    });

    it('should chain successive #map', () => {
      assert.deepEqual(
        Maybe("bombs").map(_.concat(' away')).map(_.prop('length')),
        Maybe(10)
      );
    });
  });
});
