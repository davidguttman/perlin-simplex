var assert = require('assert')

var Simplex = require('..')

var counter = 0
var TestRandom = {
  random: function() {
    counter += 1
    return 1/counter
  }
}

var simplex = new Simplex(TestRandom)

assert.equal( simplex.noise(1,2),     -0.4705299224716831)
assert.equal( simplex.noise(1,2.001), -0.474245420644826)
assert.equal( simplex.noise(1,3),     0.4989247905504145)