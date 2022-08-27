const prompt = require("prompt-sync")()
const Calculadora = require("./src/calculator")

let n1, op, n2, resul

n1 = prompt("Digite o primeiro número: ")

console.log("Operações disponíveis: \n")
console.log("| + | - | / | *| ^ |\n")

op = prompt("Digite a operação desejada: ")

n2 = prompt("Digite o segundo número: ")

resul = Calculadora.calcular(n1, op, n2)

console.log("Resultado da operação: ", resul)