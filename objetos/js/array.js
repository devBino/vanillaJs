function criandoAlgunsArrays(executar){

    if( !executar ){
        return false
    }

    //formal
    let arrPlanetas = new Array("Terra","Marte","Saturno")

    //literal
    let arrTenologias = ["JS","PHP","JAVA","C#","PYTHON","MYSQL"]

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
    let isArrayNumeros = palavras.every((elem,ind,obj)=>{
            return (typeof elem == 'number')
    })

    console.log(isArrayNumeros)

    //filter
    let filtraArrayNumeros = palavras.filter((elem,ind,obj)=>{
            return (typeof elem == 'number')
    })

    console.log(filtraArrayNumeros)

}

function vendoAlgunsMetodosDeArrays2(executar){
    
    if( !executar ){
        return false
    }

    let numeros = [1,2,1,20,1,22,25,1,33,1,56,1,66,34,'a','b']

    //indexOf
    let lastIndexOf = numeros.lastIndexOf(1)
    console.log(numeros)
    console.log(lastIndexOf)

    //join, fazer join por @ só pra variar um pouco ;)
    let joinNumeros = numeros.join("@")
    console.log(joinNumeros)

    //map
    let mapNumeros = numeros.map( (elem,ind,obj)=>{
        if( typeof elem == 'number' ){
            return elem * 3
        }else{
            return 0
        }
        
    } )

    console.log(mapNumeros)

    //Some
    let someNumeros = numeros.some((elem,ind,obj)=>{
        return (elem == 109)
    })

    console.log(someNumeros)

    //reverse
    let reverseNumeros = numeros.reverse()

    console.log(reverseNumeros)
}

function vendoAlgunsMetodosDeArrays3(){
    let numeros = [10,20,30,40,50,60,70,80,90,100]
    
    //reduce
    let reduceNumeros = numeros.reduce((v1,v2,ind,arr)=>{
        return v1+v2
    })

    console.log(reduceNumeros)

    let reduceNumerosRight = numeros.reduceRight((v1,v2,ind,arr)=>{
        return v1+v2
    })

    console.log(reduceNumerosRight)

    //shift
    let shiftNumeros = numeros.shift()
    console.log(shiftNumeros)

    //Slice
    let sliceNumeros = numeros.slice(2,5)

    console.log(sliceNumeros)

    //sort
    let numerosDesordenados = [2,1,0,3,5,4]
    let sortNumeros = numerosDesordenados.sort()
    console.log(sortNumeros)

    //splice
    let spliceNumeros = numeros.splice(0,1)
    console.log(spliceNumeros)

    //unshift
    let unshiftNumeros = numeros.unshift(2,3,11,223)
    console.log(numeros)
    console.log(unshiftNumeros)

    //tostring
    let numerosToString = numeros.toString()
    console.log(numerosToString)
}


/**
 * @description Para ver a execução das funções abixo, 
 * deve passar true como paramtetro
*/
criandoAlgunsArrays(false)
vendoAlgunsMetodosDeArrays(false)
vendoAlgunsMetodosDeArrays2(false)
vendoAlgunsMetodosDeArrays3(true)