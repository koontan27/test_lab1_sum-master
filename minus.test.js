const minus = require('./minus');

test('10 - 5 เท่ากับ 5', ()=> {
    expect(minus(10,5)).toBe(5);
});

test('10 - 20 เท่ากับ -10', ()=> {
    expect(minus(10,20)).toBe(-10);
});

test('50 - 20 เท่ากับ 30', ()=> {
    expect(minus(50,20)).toBe(30);
});

test('150 - 250 เท่ากับ -100', ()=> {
    expect(minus(150,250)).toBe(-100);
});

test('200 - 150 เท่ากับ 50', ()=> {
    expect(minus(200,150)).toBe(50);
});