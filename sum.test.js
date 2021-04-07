const sum = require('./sum');
test('Hello world = Hello world', () => {
  expect(sum("Hello world")).toBe("Hello world");
});
