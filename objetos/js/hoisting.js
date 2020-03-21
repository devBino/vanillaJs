'use strict'

function exemploHoisting1(){
    let a = 2
    let b = 3

    funcInterna1()

    function funcInterna1(){
        alert('isso é um exemplo')
    }

    return a * b
}

exemploHoisting1()