const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("quanto quer investir? ", (valor) => {
    console.log(`voce quer investir: ${valor}`);
    
    let versaoNumerica = parseFloat(valor)
        if (isNaN(versaoNumerica))  {
            console.log("Por favor, digite um numero válido. ")
        rl.question();
        }
        

rl.question("por quantos anos? ", (anos) => {
    console.log(`por ${anos} anos.`);
      
        
     let montante = (valor) * Math.pow(1.06, (anos));
        
        console.log("Na poupança vira: R$ ", montante.toLocaleString(undefined, {minimumFractionDigits: 2}))

    rl.close();
});
});