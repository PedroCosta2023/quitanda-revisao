const quantidadeTomate = document.getElementById("quantidadeTomate");
const quantidadeMaca = document.getElementById("quantidadeMaca");

const resultadoBruto = document.getElementById("totalBruto");
const resultadoLiquido = document.getElementById("totalLiquido");

let precoTomate = 2.5;
let precoMaca = 1.8;
let desconto = 0.3;

let totalTomate = 0;
let totalMaca = 0;
let dezPorcento = 0.9;

let total = totalMaca + totalTomate;

function calcular() {
  if (quantidadeTomate.value > 5) {
    totalTomate = Number(quantidadeTomate.value) * (precoTomate - desconto);
  } else {
    totalTomate = Number(quantidadeTomate.value) * precoTomate;
  }
  if (quantidadeMaca.value > 5) {
    totalMaca = Number(quantidadeMaca.value) * (precoMaca - desconto);
  } else {
    totalMaca = Number(quantidadeMaca.value) * precoMaca;
  }

  if (
    Number(quantidadeMaca.value) + Number(quantidadeTomate.value) > 8 ||
    total > 25
  ) {
    resultadoLiquido.textContent = (
      (totalTomate + totalMaca) *
      dezPorcento
    ).toFixed(2);
  }
  resultadoBruto.textContent = (totalTomate + totalMaca).toFixed(2);
}
