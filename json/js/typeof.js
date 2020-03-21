(function executaJs(win,doc){
    'use strict'

    let arrCoisas = [1,1.1,true,'Thiago',{idade:13},[0,1,2]]

    /**
     * @description Tipos de dados
     * number
     * string
     * boolean
     * object
     * 
    */

    for( var i=0; i<arrCoisas.length; i++ ){
        
        //console.log(typeof arrCoisas[i])    
        
        let calculo = 0
        
        if( typeof arrCoisas[i] == 'number' ){
            calculo = arrCoisas[i] * 10
        }

        console.log(calculo)
    }

    console.log(Array.isArray(arrCoisas))

})(window,document)