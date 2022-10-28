

let saldo = Number(prompt("Saldo Inicial: "))
let cheque = Number(prompt('Valor do cheque: '))


if (cheque <= saldo) {
    saldo = saldo - cheque
    alert('Saldo atual ' + saldo)

} else if (cheque > saldo) {
    alert("Saldo insuficiente")
}