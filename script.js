function verificar() {
    const numero = document.getElementById("numero").value;
    const numeroString = numero.toString();
    const numeroInvertido = numeroString.split("").reverse().join("");

    if (numeroString === numeroInvertido) {
      document.getElementById("resultado").innerHTML = "É um palíndromo";
    } else
      document.getElementById("resultado").innerHTML = "Não é um palídromo";
}
  