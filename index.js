let vitoria = calcularVitorias(91, 5);
let nivel = "diamante"

if (vitoria <= 10) {
    nivel = "ferro";
} else if (vitoria >= 11 && vitoria <= 20) {
    nivel = "bronze";
} else if (vitoria >= 21 && vitoria <= 50) {
    nivel = "prata";
} else if (vitoria >= 51 && vitoria <= 80) {
    nivel = "ouro";
} else if (vitoria >= 81 && vitoria <= 90) {
    nivel = "diamante";
} else if (vitoria >= 91 && vitoria <= 100) {
    nivel = "lendario";
} else if (vitoria > 100) {
    nivel = "imortal";
}

console.log("O Herói tem saldo de " + vitoria + " vitórias e está no nível de " + nivel);

function calcularVitorias(vitoria, derrota) {
    let resultado = vitoria - derrota;
    return resultado;
}
