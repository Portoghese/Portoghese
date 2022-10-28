

var nota1 = Number(prompt("Primeira nota: "))
var nota2 = Number(prompt("Segunda nota: "))
var nota3 = Number(prompt("Terceira nota: "))
var media

media = (nota1 + nota2 + nota3)/3

if (media >= 6) {

alert("APROVADO")

} else if (media >= 4 && media < 6) {
    alert("RECUPERACAO")
    
} else if (media < 4){
    alert("Reprovado")

}

