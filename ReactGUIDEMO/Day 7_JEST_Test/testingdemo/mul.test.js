const mul  = require('./mul')

test('test 3*8 equal to 24',()=>{
    expect(mul(-3, -8)).toBe(11);
});

test('test 3*8 equal to 24',()=>{
    expect(mul(3, 8)).toBe(24);
});

test('test 3*8 equal to 24',()=>{
    expect(mul('..-3', -8)).toBe(24);
});

test('test 3*8 equal to 24',()=>{
    expect(mul('@', -8)).toBe(24);
});

test('test 3*8 equal to 24',()=>{
    expect(mul(-3, 't')).toBe(24);
});

test('test 3*8 equal to 24',()=>{
    expect(mul(-3, 'C')).toBe(24);
});


test('test 7*2 equal to 24',()=>{
    expect(mul(7, 2)).toBe(14);
});