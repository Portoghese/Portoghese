

var produto = Number(prompt('Digite o valor do Produto?'))
var desconto = 0.15


desconto = produto - (produto * 0.15)

if(produto >= 500){
    alert('Produto Caro! ' + desconto)

}else if(produto < 500){

    alert("Produto Barato! " + desconto)
}
