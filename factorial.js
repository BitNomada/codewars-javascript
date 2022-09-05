/*Your task is to write function factorial.*/

console.log(factorial(5))

function factorial(n){
    let factorial = 1

    for(let i = 1; i <= n; i++){
        factorial *= i
    }

    return factorial

}