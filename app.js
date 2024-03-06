alert('Boas vindas ao jogo do número secreto');

let maxNumber = 100;
let tentativas = 10;
let chute;
let numeroSecreto = parseInt(Math.random()*maxNumber+1) ;

while(chute != numeroSecreto){
    let chute = prompt(`Escolha um número entre 1 e ${maxNumber} `);
if (chute == numeroSecreto) {
    break
}   else if(chute > numeroSecreto){
        alert('O seu chute é maior que o número secreto')
    }else{
        alert('seu chute é menor que o número secreto')
    }
    tentativas++;
}
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu. O número secreto é ${numeroSecreto}. Você precisou de ${tentativas} ${palavraTentativas} para acertar `);



