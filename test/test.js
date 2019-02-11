var assert = require('assert'),
  reverse = require('./../StringReversal/stringReversal2');

describe('reverse()', function() {
  it('should return the reverse of the passed string', function() {
    assert.equal(reverse('apple'), 'elppa');
  });
});
