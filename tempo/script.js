function calcularIdade() {
  var dataNascimento = document.getElementById("dataNascimento").value;
  var dataNascimentoObj = new Date(dataNascimento);
  var hoje = new Date();
  var diferenca = hoje.getTime() - dataNascimentoObj.getTime();
  var idadeAnos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
  var idadeMeses = idadeAnos * 12 + Math.floor((diferenca / (1000 * 60 * 60 * 24 * 30.4)) % 12);
  var idadeDias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  document.getElementById("resultado").innerHTML = "Você está vivendo há " + idadeAnos + " anos, " + idadeMeses + " meses, " + idadeDias + " dias.";
}
