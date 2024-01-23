alert('Boas-vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // gerando numero secreto 
console.log(numeroSecreto);
let chute;
let tentativas = 1; 

// enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto ) {
        break;
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

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou! ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1) {
//    alert(`Parabéns, você acertou! ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Parabéns, você acertou! ${numeroSecreto} com ${tentativas} tentativa.`);
//}
