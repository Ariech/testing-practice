/* eslint-disable no-undef */
import calculator from "./calculator";

test("Add", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("Add negative number", () => {
  expect(calculator.add(2, -4)).toBe(-2);
});

test("Subtract", () => {
  expect(calculator.subtract(10, 6)).toBe(4);
});

test("Subtract negative", () => {
  expect(calculator.subtract(10, -6)).toBe(16);
});

test("Divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("Divide negative", () => {
  expect(calculator.divide(10, -2)).toBe(-5);
});

test("Multiply", () => {
  expect(calculator.multiply(40, 5)).toBe(200);
});

test("Multiply negative", () => {
  expect(calculator.multiply(100, -2)).toBe(-200);
});
