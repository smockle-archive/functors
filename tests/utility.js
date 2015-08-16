import {match,add} from '../lib/utility';
import {assert} from 'chai';

describe('Utility', () => {
  describe('#match', () => {
    it('should partially apply', () => {
      assert.instanceOf(
        match(/(chapter \d+(\.\d)*)/ig),
        Function
      );
    });

    it('should match with partial application', () => {
      assert.deepEqual(
        match(/(chapter \d+(\.\d)*)/ig)('For more information, see Chapter 3.4.5.1'),
        ['Chapter 3.4.5.1']
      );
    });

    it('should match without partial application', () => {
      assert.deepEqual(
        match(/(chapter \d+(\.\d)*)/ig, 'For more information, see Chapter 3.4.5.1'),
        ['Chapter 3.4.5.1']
      );
    });
  });

  describe('#add', () => {
    it('should partially apply', () => {
      assert.instanceOf(
        add(1),
        Function
      );
    });

    it('should add two numbers with partial application', () => {
      assert.strictEqual(
        add(1)(2),
        3
      );
    });

    it('should add two numbers without partial application', () => {
      assert.strictEqual(
        add(1, 2),
        3
      );
    });

    it('should add three numbers without partial application', () => {
      assert.strictEqual(
        add(1, 2, 3),
        6
      );
    });
  });
});
