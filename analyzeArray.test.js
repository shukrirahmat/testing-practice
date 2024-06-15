import analyzeArray from "./analyzeArray.js";

test("null", () => {
  expect(analyzeArray(null)).toBe(null);
});

test("empty array", () => {
  expect(analyzeArray([])).toBe(null);
});

test("single element", () => {
  expect(analyzeArray([25])).toEqual({
    average: 25,
    min: 25,
    max: 25,
    length: 1,
  });
});

test("multiple element", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("mixed element", () => {
  expect(analyzeArray([2, 9, "a", 3, 6, "X"])).toEqual({
    average: 5,
    min: 2,
    max: 9,
    length: 4,
  });
});
