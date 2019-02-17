var assert = require('assert'),
  reverse = require('./../StringReversal/stringReversal2'),
  palindrome = require('./../Palindrome/palindrome2'),
  maxChars = require('./../MaxChars/maxChars'),
  matrixTranspose = require('./../MatrixTranspose/matrixTranspose');

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

describe('maxChars()', function() {
  it('should return max number of chars used in the string', function() {
    assert.equal(maxChars('apple'), "p");
  });
  it('should return max number of chars used in the string', function() {
    assert.equal(maxChars('abbcc 1122233333'), "3");
  });
});

describe('matrixTranspose()', function() {
  it('should return transpose of matrix', function() {
    assert.equal(matrixTranspose([[2,3,9],[1,4,7],[5,6,8]]), [[2,1,5],[1,4,7],[9,7,8]]);
  });
});
