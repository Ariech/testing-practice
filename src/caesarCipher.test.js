import caesarCipher from "./caesarCipher";

test("No shift", () => {
  expect(caesarCipher("hello", 0)).toBe("hello");
});

test("Shift three", () => {
  expect(caesarCipher("wonderful. day", 3)).toBe("zrqghuixo. gdb");
});

test("Shift six", () => {
  expect(caesarCipher("rainy day", 6)).toBe("xgote jge");
});
