Algoritmo "Inte10A20"
//Ler 10 valores e escrever quantos desses valores
// lidos estão no intervalo [10,20]
// (incluindo os valores 10 e 20 no intervalo)
//e quantos deles estão fora deste intervalo.
// Usando o laço de repetição REPITA
var
   cont,N,V,V2 :inteiro
Inicio
   cont <- 0
   enquanto cont < 10 faça
      cont <- cont + 1
      Escreva ("Digite",cont,"ºNúmero: ")
      leia(N)

      se (n >= 10) e (n <=20) entao
         v <- v + 1
      senao
         v2 <- v2 + 1
         fimse
      fimenquanto
      escrevaL ("A quantidade no intervalo de 10/20 é: ",v)
      escrevaL ("A quantidade fora do intervalor de 10/20 é: ",v2)

fimalgoritmo
