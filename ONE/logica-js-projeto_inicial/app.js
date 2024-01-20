alert('Boas-vindas ao jogo do número secreto');

let numeroSecreto = 15;
console.log(numeroSecreto);
let chute;
let tentativas = 1; 

// enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto ) {
        alert(`Parabéns, você acertou! ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas +1;
        tentativas++;
    }   
}

