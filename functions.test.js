const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5)
})

test('should be null', () => {
  expect(functions.isNull()).toBeNull()
})

test('null should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

test('0 should be falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy()
})

test('undef should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy()
})

test('2 should not be falsy', () => {
  expect(functions.checkValue(2)).not.toBeFalsy()
})

test('User should be Josh Jimmy obj', () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: 'Josh',
    lastName: 'Jimmy',
  })
})

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800
  const load2 = 800
  expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex
test('there is no i in team', () => {
  expect('team').not.toMatch(/I/)
})

// Arrays
test('Admin should be in username', () => {
  usernames = ['jmimmasdf', 'swagguy1234', 'Sam', 'Bill', 'admin']
  expect(usernames).toContain('admin')
})

// Working with async
test('user fetched name should be Leanne Graham', async () => {
  jest.setTimeout(10000)
  expect.assertions(1)
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})
