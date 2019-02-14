var assert = require('assert'),
  reverse = require('./../StringReversal/stringReversal2'),
  palindrome = require('./../Palindrome/palindrome2');
  maxChars = require('./../MaxChars/maxChars');

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

describe('palindrome()', function() {
  it('should return max number of chars used in the string', function() {
    assert.equal(maxChars('apple'), "p");
  });
  it('should return max number of chars used in the string', function() {
    assert.equal(maxChars('abbcc 1122233333'), "3");
  });
});
