(function(win,doc){
    'use strict'

    function exJson1(executar){
        
        if(!executar){
            return false
        }

        //stringify
        let data = {
            carro:{
                ano:2010,
                cor:'Preto',
                modelo:'Palio Elx 1.0'
            }
        }

        console.log( JSON.stringify(data) )

        //parse
        let data2 = '{"nome":"fernando bino"}'
        console.log(JSON.parse(data2))
    }

    exJson1(true)



})(window,document)