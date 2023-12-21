const area  = require('./area')

test('test area a is equal to 25',()=>{
    expect(area(5)).toBe(25);
});


test('test area a is equal to 25',()=>{
    expect(area(-5)).toBe(25);
});

test('test area a is equal to 25',()=>{
    expect(area('..5')).toBe(25);
});


test('test area a is equal to 25',()=>{
    expect(area('a')).toBe(25);
});


test('test area a is equal to 25',()=>{
    expect(area('F')).toBe(25);
});

test('test area a is equal to 25',()=>{
    expect(area('#')).toBe(25);
});

test('test area a is equal to 25',()=>{
    expect(area(-2)).toBe(4);
});


test('test area a is equal to 4.84',()=>{
    expect(area(2.2)).toBe( 4.840000000000001);
});