'use strict';

var expect = require('chai').expect;


describe('random-tld: ', function () {

  var tlds      = require('tld-list');
  var randomTld = require('../../');

  it('randomTld()', function () {
    expect(randomTld()).to.be.oneOf(tlds)
  });
});
