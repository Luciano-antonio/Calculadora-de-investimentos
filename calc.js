const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function fazerPergunta(texto) {
   return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            resolve(resposta)
        })
    })
}
async function executar() {
let valor;
while (true) {
    const resposta = await fazerPergunta("Quanto quer investir? ");
    valor = parseFloat(resposta)
        if (!isNaN(valor)) {
            break;
        }
        console.log("erro: Digite apenas números!");
}
let anos;
while (true) {
    const respostaN = await fazerPergunta("Quantos anos voce quer investir? ");
    anos = parseFloat(respostaN)
        if (!isNaN(anos)) {
        break;
     }
        console.log("por quantos anos voce vai investir? ");
}
    let montante = valor * Math.pow(1.06, anos)
        console.log("O total após " + anos + " anos será: R$  " + montante.toLocaleString())
            rl.close()
}



executar()
