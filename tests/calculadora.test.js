const { suma } = require("../src/calculadora");

test("debería sumar dos números", () => {
  expect(suma(2, 3)).toBe(5);
});º