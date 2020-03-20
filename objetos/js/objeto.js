/**
 * Conceitos básicos de Objetos
*/
let obj = new Object()

obj.fn1 = ()=>{
    alert('função moderna js')
}

let obj2 = {
    fn1:function(){
        alert('fn1 do objeto')
    },
    fn2:function(){
        alert('fn2 de objeto')
    }
}

let pessoa = {
    nome: 'Fernando',
    idade: 30,
    info:function(){
        alert(`Nome:${this.nome}, Idade:${this.idade}`)
    }
}

obj.fn1()
obj2.fn2()
pessoa.info()