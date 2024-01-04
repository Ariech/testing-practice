import analyzeArray from "./analyzeArray";

test("Check average", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.object.average).toEqual(4);
});

test("Check min", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.object.min).toEqual(1);
});

test("Check max", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.object.max).toEqual(8);
});

test("Check length", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.object.length).toEqual(6);
});

test("Check object", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).object).toEqual({
    average: 4,
    length: 6,
    max: 8,
    min: 1,
  });
});
