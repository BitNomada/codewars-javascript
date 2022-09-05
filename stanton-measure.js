/*
The Stanton measure of an array is computed as follows: count the number of 1s in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its Stanton measure.

Examples
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.
*/

/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
assert.deepEqual(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]),3);
  });
});
*/

function stantonMeasure(arr){

    let n = 0
    arr.forEach(element => {
        if(element == 1){
            n++
        }
    })

    let contador = 0
    arr.forEach(element=>{
        if(element == n){
            contador++
        }
    })

    return contador

}