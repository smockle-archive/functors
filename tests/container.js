import Container from '../lib/container';
import {assert} from 'chai';
import util from 'util';
import * as _ from 'ramda';

describe('Container', () => {
  describe('#constructor', () => {
    it('should return a Container of number', () => {
      assert.instanceOf(
        Container(3),
        Container
      );
    });

    it('should return a Container of string', () => {
      assert.instanceOf(
        Container('hotdogs'),
        Container
      );
    });

    it('should return a Container of a Container of Object', () => {
      assert.instanceOf(
        Container(Container({ name: 'yoda' })),
        Container
      );
    });
  });

  describe('#inspect', () => {
    it('should output a Container of number', () => {
      assert.strictEqual(
        util.inspect(Container(3)),
        'Container(3)'
      );
    });

    it('should output a Container of string', () => {
      assert.strictEqual(
        util.inspect(Container('hotdogs')),
        'Container(\'hotdogs\')'
      );
    });

    it('should output a Container of a Container of Object', () => {
      assert.strictEqual(
        util.inspect(Container(Container({ name: 'yoda' }))),
        'Container(Container({"name":"yoda"}))'
      );
    });
  });

  describe('#map', () => {
    it('should map to a Container of number', () => {
      assert.deepEqual(
        Container(2).map(two => two + 2 ),
        Container(4)
      );
    });

    it('should map to a Container of string', () => {
      assert.deepEqual(
        Container("flamethrowers").map(s => s.toUpperCase()),
        Container('FLAMETHROWERS')
      );
    });

    it('should chain successive #map', () => {
      assert.deepEqual(
        Container("bombs").map(_.concat(' away')).map(_.prop('length')),
        Container(10)
      );
    });
  });
});
