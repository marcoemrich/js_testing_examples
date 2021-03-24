// test("add 1 + 1 => 2", () => {
//   expect(1 + 1).toBe(2);
// });
// test("add 1 + 2 => 3", () => {
//   expect(1 + 2).toBe(3);
// });
// test("add 2 + 5 => 7", () => {
//   expect(2 + 5).toBe(7);
// });

test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 5, 7],
])("add(%i, %i) => %i", (a, b, expected) => {
  expect(a + b).toBe(expected);
});
