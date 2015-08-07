import Container from '../lib/container';
import {assert} from 'chai';
import util from 'util';
import * as _ from 'ramda';

describe('Container', () => {
  describe('#of', () => {
    it('should return a Container of number', () => {
      assert.instanceOf(
        Container.of(3),
        Container
      );
    });

    it('should return a Container of string', () => {
      assert.instanceOf(
        Container.of('hotdogs'),
        Container
      );
    });

    it('should return a Container of a Container of Object', () => {
      assert.instanceOf(
        Container.of(Container.of({ name: 'yoda' })),
        Container
      );
    });
  });

  describe('#inspect', () => {
    it('should output a Container of number', () => {
      assert.strictEqual(
        util.inspect(Container.of(3)),
        'Container.of(3)'
      );
    });

    it('should output a Container of string', () => {
      assert.strictEqual(
        util.inspect(Container.of('hotdogs')),
        'Container.of(\'hotdogs\')'
      );
    });

    it('should output a Container of a Container of Object', () => {
      assert.strictEqual(
        util.inspect(Container.of(Container.of({ name: 'yoda' }))),
        'Container.of(Container.of({"name":"yoda"}))'
      );
    });
  });

  describe('#map', () => {
    it('should map to a Container of number', () => {
      assert.deepEqual(
        Container.of(2).map(function(two) { return two + 2 }),
        Container.of(4)
      );
    });

    it('should map to a Container of string', () => {
      assert.deepEqual(
        Container.of("flamethrowers").map(function(s) { return s.toUpperCase() }),
        Container.of('FLAMETHROWERS')
      );
    });

    it('should chain successive #map', () => {
      assert.deepEqual(
        Container.of("bombs").map(_.concat(' away')).map(_.prop('length')),
        Container.of(10)
      );
    });
  });
});
