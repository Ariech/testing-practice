/* eslint-disable no-undef */
import capitalize from "./capitalize";

test("check if first letter capitalized", () => {
  expect(capitalize("dominik")).toBe("Dominik");
});

test("first capitalized", () => {
  expect(capitalize("Hello")).toBe("Hello");
});
