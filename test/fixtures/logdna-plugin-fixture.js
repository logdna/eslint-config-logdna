'use strict'

const test = require('./test/basic')
const net = require('net')

test('fake test', async (t) => {
  t.ok(net.isIP('12.34.56.78'))
  t.isEqual(1, 1, '1 === 1')
  t.deepEqual(2 + 2, 5, '2 + 2 === 5')

  t.tearDown(() => {
    return true
  })
})
