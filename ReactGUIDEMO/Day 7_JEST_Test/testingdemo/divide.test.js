const divide  = require('./divide')

test('test 10/2 equal to 5',()=>{
    expect(divide(10, 2)).toBe(5);
});

test('test 20/2 equal to 10',()=>{
    expect(divide(20, 2)).toBe(10);
});

test('test 30/2 equal to 15',()=>{
    expect(divide(30, 2)).toBe(15);
});

test('test 50/2 equal to 5',()=>{
    expect(divide(50, '..2')).toBe(25);
});

test('test 100/2 equal to 5',()=>{
    expect(divide(100, 2)).toBe(50);
});

test('test 131/2 equal to 5',()=>{
    expect(divide(131, 2)).toBe(65.5);
});