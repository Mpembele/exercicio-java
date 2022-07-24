let nome = prompt("Qual é o seu nome?")
console.log('nome:', nome)

let sobrenome = prompt("Qual o seu sobre nome?")
console.log('Sobre nome:',sobrenome)

let idade = prompt("Qual é a sua idade?")
Number(idade)
console.log('idade:',idade)

let nome2 = prompt("Qual é o nome da segunda pessoa?")
console.log('nome:', nome2)

let sobrenome2 = prompt("Qual o sobre nome da segunda pessoa?")
console.log('Sobre nome:',sobrenome2)

let idade2 = prompt("Qual é a idade da segunda pessoa?")
Number(idade)
console.log('idade:',idade2)

if(idade > idade2){
    console.log(nome,'é mais velho que',nome2)
}else{
    console.log(nome2,'é mais velho que',nome)
}