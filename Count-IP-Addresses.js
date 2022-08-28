/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses 
between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. 
The last address will always be greater than the first one.

* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/

let numberOfIp = ipsBetween("10.0.0.10", "20.0.1.0")

function ipsBetween(start, end){

    let startDivided = start.split(".")
    let endDivided = end.split(".")


    let currentDifference = 0
    let difference = 0

    for(let i = 3; i >= 0; i--){
        currentDifference = endDivided[i] - startDivided[i] 

        if(i == 3){
            difference += currentDifference
        } else if (i == 2){
            difference += currentDifference * 256
        } else if (i == 1) {
            difference += currentDifference * 256 * 256
        } else if (i == 0){
            difference += currentDifference * 256 * 256 * 256
        }
    }

    return difference
  }

  