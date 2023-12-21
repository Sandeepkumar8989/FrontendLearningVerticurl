const sub  = require('./sub')

test('test 8-3 equal to 5',()=>{
    expect(sub(8, 3)).toBe(5);
});
test('test 8-3 equal to 5',()=>{
    expect(sub("'8'", 3)).toBe(5);
});

test('test 8-3 equal to 5',()=>{
    expect(sub('d', 3)).toBe(5);
});

test('test 8-3 equal to 5',()=>{
    expect(sub(8, 'n')).toBe(5);
});

test('test 8-3 equal to 5',()=>{
    expect(sub('t', 'n')).toBe(5);
});

test('test 18-3 equal to 15',()=>{
    expect(sub(18, 3)).toBe(15);
});