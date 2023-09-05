

// problema 26
// Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

const input = require('readline-sync')

// Entrada
const days = Number(input.question('Digite um valor de dia ---> '))

// Processamento
const week = 7
const remainings = Math.floor(days / week)
const calculus = days - (week * remainings)

// Saída
const title = '\n===== RELATÓRIO =====\n'
const report = title + days + ' dias: ' + remainings + ' semana(s) e ' + calculus + ' dia(s)' + '\n'

console.log(report)
