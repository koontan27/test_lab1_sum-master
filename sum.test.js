const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', ()=> {
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ 7', ()=> {
  expect(sum(2,5)).toBe(7);
});

// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy

// 13 + 7 เท่ากับ ?
test('13 + 7 เท่ากับ 20', ()=> {
  expect(sum(13,7)).toBe(20);
});

// 23 + 27 เท่ากับ ?
test('23 + 27 เท่ากับ 50', ()=> {
  expect(sum(23,27)).toBe(50);
});

// 33 + 2 เท่ากับ ?
test('33 + 2 เท่ากับ 35', ()=> {
  expect(sum(33,2)).toBe(35);
});