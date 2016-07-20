
var t = require('assert')
var headers = require('../')


it('copy', () => {
  var input = {a: 1}
  var instance = headers(input)
  instance.set('a', 2)
  t.deepEqual(input, {a: 1})
  t.deepEqual(instance.all(), {a: 2})
})

it('get', () => {
  var input = {'Content-Type': 1}
  var instance = headers(input)
  t.equal(instance.get('content-type'), 1)
})

it('set existing', () => {
  var input = {'Content-Type': 1}
  var instance = headers(input)
  instance.set('content-type', 2)
  t.equal(instance.get('content-type'), 2)
})

it('set new', () => {
  var input = {}
  var instance = headers(input)
  instance.set('content-type', 1)
  t.deepEqual(instance.all(), {'content-type': 1})
})

it('remove', () => {
  var input = {'Content-Type': 1}
  var instance = headers(input)
  instance.remove('content-type')
  t.deepEqual(instance.all(), {})
})
