// console são utilados para debugar codigos

// console.log
// console.warn
// console.error
// console.info
// console.clear
// console.table


// var a = (1)
// console.log(a)

// let b = ['andrew']
// console.warn(b)

// const c = ['casa 1', 'bloco 15', 'apartamento 20']
// console.error(c)

// const bed = ['Vai dormir que você é corno e não morcego']
// console.info(bed)

// let e var = variavel que sofre alteração
// const = variavel que não muda o valor (constante)

// let a = 1
// var b = 2
// const c = 'manter valor'

// // reatribuindo valores
// a = 'oi'
// b = 'nada'

// // tipos de dados

// let string = 'dado' // String
// console.log(typeof(string))
// let number = 10 // number
// console.log(typeof(number))
// let added = null // nulo
// console.log(typeof(added))
// let x // Não foi definido
// console.log(x)
// const address = [{ cep :06783060, logradouro: 'Rua campos sales', uf: 'SP'}, { cep :06783060, logradouro: 'Rua campos sales', uf: 'SP'}, { cep :06783060, logradouro: 'Rua campos sales', uf: 'SP'}] //objetos
// console.table(address) 
// const motos = ['Xre 300', 'XT 660', 'CB 500'] // objetos
// console.log(motos)

// window.alert ('Seja Bem vindo ao BlackBeard =)')

//metodos de string

// const fullName = 'Black Beard Barbearia'

// console.log(fullName.slice(6, 11))

// console.log(fullName.indexOf('Black'))

// console.log(fullName.length)

// const arrayName = fullName.split(' ')
// console.log(arrayName)

// const firstName = arrayName[2]
// console.log(firstName)

// console.log(firstName.toLocaleLowerCase())

// console.log(fullName.toLocaleUpperCase())

//metodo de Array

const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length)

console.log(list[2])

list[5] = 'f'

console.log(list)

list.push('g')

console.log(list)

console.log(list[list.length -3])

list.pop()
console.log(list)

list.shift()
console.log(list)

list.unshift('a')
console.log(list)