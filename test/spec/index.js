'use strict';

var tlds   = require('tld-list');
var char   = require('chai');
var expect = char.expect;


describe('random-tld: ', function () {

  var randomTld = require('../../index');

  it('randomTld()', function () {
    expect(randomTld()).to.be.oneOf(tlds)
  });

});
