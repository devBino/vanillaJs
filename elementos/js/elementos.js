(function(win,doc){
    'use strict'

    //selecionando pelo id
    let byId = doc.getElementById('teste')
    byId.innerHTML = '<h1>novo teste</h1>'
    byId.style.border = '1px solid #dddddd'

    //por classe
    let byClass = doc.getElementsByClassName('btn')
    console.log(byClass)

    //por tag name
    let byTagName = doc.getElementsByTagName('h1')
    console.log(byTagName)
    
    //let byQuery
    let byQueryId = doc.querySelector('#teste')
    byQueryId.style.backgroundColor = 'pink'

    let byQueryClass = doc.querySelector('.btn')
    console.log(byQueryClass)

    let byQueryName = doc.querySelector('button')
    console.log(byQueryName)

    //para selecionar todos os elemetos usamos .querySelectorAll()
    let byQueryClassAll = doc.querySelectorAll('.btn')
    
    for( let i=0; i<byQueryClassAll.length; i++ ){
        byQueryClassAll[i].addEventListener('click',()=>{
            doc.querySelector('body').style.backgroundColor=byQueryClassAll[i].getAttribute('data-color')
        })
    }
    

})(window,document)