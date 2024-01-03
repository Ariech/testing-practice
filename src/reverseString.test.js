/* eslint-disable no-undef */
import reverseString from "./reverseString";

test("Reversed for a string", () => {
  expect(reverseString("Dominik")).toBe("kinimoD");
});

test("Reversed for a string numbers", () => {
  expect(reverseString("1341")).toBe("1431");
});

test("Reverse two strings with space", () => {
  expect(reverseString("The dog")).toBe("god ehT");
});
