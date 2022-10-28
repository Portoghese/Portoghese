



var investimento = Number(prompt('Digite o valor do investimento?'))
var tipo = Number(prompt('Qual o tipo de investimento?'))


if(tipo == 1){
    investimento = investimento + ((investimento * 5)/100)
    alert('Poupanca ' + investimento)

}else if(tipo == 2) {
    investimento = investimento + ((investimento * 10)/100)

    alert('Fundo de renda Fixa: ' + investimento)
}
