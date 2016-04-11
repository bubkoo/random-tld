'use strict';

var tlds     = require('tld-list');
var pickSome = require('pick-some');

module.exports = function () {

  var ret = pickSome(tlds, { count: 1 });

  return ret && ret[0];
};
