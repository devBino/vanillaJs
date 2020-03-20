function criandoAlgunsArrays(executar){

    if( !executar ){
        return false
    }

    //formal
    let arrPlanetas = new Array("Terra","Marte","Saturno")

    //literal
    let arrTenologias = new Array("JS","PHP","JAVA","C#","PYTHON","MYSQL")

    //associativo
    let arrCarros = {
        fiat:['palio','siena','punto'],
        wolks:['gol','golf'],
        reno:['megane','clio']
    }

    let objArrays = new Object()
    objArrays.planetas      = arrPlanetas
    objArrays.tecnologias   = arrTenologias
    objArrays.arrCarros     = arrCarros

    console.log(objArrays)
}

function vendoAlgunsMetodosDeArrays(executar){
    
    if( !executar ){
        return false
    }

    //concat
    let animaisAquaticos    = ["peixes","tartarugas","baleias"]
    let animaisTerrestres   = ["cachorro","gato","tamanduá"]
    let animais = animaisAquaticos.concat(animaisTerrestres)

    console.log(animais)

    let palavras = ["um",1,"dois",2,"tres",3]
    
    //every
    let isArrayNumeros = palavras.every(
        function verificaElementos(elem,ind,obj){
            return (typeof elem == 'number')
        }
    )

    console.log(isArrayNumeros)

    //filter
    let filtraArrayNumeros = palavras.filter(
        function confereElementos(elem,ind,obj){
            return (typeof elem == 'number')
        }
    )

    console.log(filtraArrayNumeros)

    //indexOf
    let indexOf = animais.indexOf("gato")
    console.log(indexOf)
    
}


criandoAlgunsArrays(false)
vendoAlgunsMetodosDeArrays(true)