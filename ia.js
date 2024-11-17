// Função que espera 50 milissegundos
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Função assíncrona que executa o loop
async function loop() {
    let counter = 0; // Variável que será incrementada

    // Enquanto o contador for menor que 10
    while (counter < 10) {
        console.log("Counter:", counter); // Imprime o valor do contador
        counter++; // Incrementa a variável

        // Espera 50ms antes de continuar para o próximo incremento
        await sleep(50);
    }

    console.log("Loop terminou! Contador chegou a 10.");
}

// Chama a função loop e espera a execução terminar
async function main() {
    await loop(); // Aguarda o término do loop
    console.log("Código após o loop!");
}

// Executa o código
main();
