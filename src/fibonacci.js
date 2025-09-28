function generarSecuenciaFibonacci(n) {
  if (n <= 0) return "";
  if (n === 1) return "0";
  if (n === 2) return "01";

  let f = [0, 1];
  for (let i = 2; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f.join("");
}

module.exports = { generarSecuenciaFibonacci };
