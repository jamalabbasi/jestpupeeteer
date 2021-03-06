const {add,sub,mul,div} = require('../math.js');

test('Adding 1 + 1 equals 2', () => {
    expect(add(1, 1)).toBe(2)
  })
  test('Multiplying 1 * 1 equals 1', () => {
    expect(mul(1, 1)).toBe(1)
  })
  test('Subtracting 1 - 1 equals 0', () => {
    expect(sub(1, 1)).toBe(0)
  })
  test('Dividing 1 / 1 equals 1', () => {
    expect(div(1, 1)).toBe(1)
  })