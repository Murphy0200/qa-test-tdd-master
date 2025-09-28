const { generarSecuenciaFibonacci } = require("../src/fibonacci");

test("debería retornar '0' cuando n = 1", () => {
  expect(generarSecuenciaFibonacci(1)).toBe("0");
});

test("debería retornar '01' cuando n = 2", () => {
  expect(generarSecuenciaFibonacci(2)).toBe("01");
});

test("debería retornar '0112358' cuando n = 7", () => {
  expect(generarSecuenciaFibonacci(7)).toBe("0112358");
});

test("debería retornar vacío cuando n = 0", () => {
  expect(generarSecuenciaFibonacci(0)).toBe("");
});

test("debería generar correctamente 10 números", () => {
  expect(generar_secuencia_fibonacci(10)).toBe("01123581321");
});

test("debería generar correctamente 15 números", () => {
  expect(generar_secuencia_fibonacci(15))
    .toBe("01123581321345589");
});

test("debería retornar vacío cuando n es negativo", () => {
  expect(generarSecuenciaFibonacci(-3)).toBe("");
});
