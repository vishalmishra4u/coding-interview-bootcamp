var assert = require('assert'),
  reverse = require('./../StringReversal/stringReversal2'),
  palindrome = require('./../Palindrome/palindrome2');

describe('reverse()', function() {
  it('should return the reverse of the passed string', function() {
    assert.equal(reverse('apple'), 'elppa');
  });
  it('should return the reverse of the passed string', function() {
    assert.equal(reverse('mango'), 'ognam');
  });
});

describe('palindrome()', function() {
  it('should return true if the passed string is a palindrome, else false', function() {
    assert.equal(palindrome('apple'), false);
  });
  it('should return true if the passed string is a palindrome, else false', function() {
    assert.equal(palindrome('abba'), true);
  });
});
