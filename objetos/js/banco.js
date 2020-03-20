/**
 * @description Exercício para pegar conceitos básicos de objetos
*/
let cliente = {
    nome:'Fernando',
    agencia:123,
    cc:123123
}

let operacao = {
    sacar:function(saldo,valor){
        return saldo -= valor
    },
    depositar:function(saldo,valor){
        return saldo += valor
    }
}

let banco = {
    cliente:cliente,
    operacao:operacao,
    saldo:50
}

let valorSaque = 20
let novoSaldo = banco.operacao.sacar( banco.saldo, valorSaque )
banco.saldo = novoSaldo

console.log(
    banco.cliente.nome +
    " portador da conta " + 
    banco.cliente.cc + 
    " realizou um saque de " +
    valorSaque + 
    " ficando com " +
    banco.saldo
)


console.log("-------------------------------------------")

//percorrendo objetos com for in
for( c in cliente ){
    console.log(c)
    console.log(cliente[c])
}