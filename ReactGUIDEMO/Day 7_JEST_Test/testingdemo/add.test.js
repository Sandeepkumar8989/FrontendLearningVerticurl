// const { default: test } = require('node:test');
// const { text } = require('stream/consumers');
const add = require('./add')

test('test 3+8 equal to 11', () => {
    expect(add(3, 8)).toBe(11);
});

test('test 3+8 equal to 11', () => {
    expect(add(3, '8')).toBe(11);
});

test('test 3+8 equal to 11', () => {
    expect(add('@', 8)).toBe(11);
});

test('test 3+8 equal to 11', () => {
    expect(add('a', 8)).toBe(11);
});

test('test 3+8 equal to 11', () => {
    expect(add('Z', 8)).toBe(11);
});

test('test 3+8 equal to 11', () => {
    expect(add(3, 'A')).toBe(11);
});


test('test 3+8 equal to 11', () => {
    expect(add(3, -3)).toBe(0);
});