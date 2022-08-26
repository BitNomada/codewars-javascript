/*The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

RGB         HEX
0 - 9 ->    0-9
10 ->       A
10 - 15     A-F
16          10


Primer digito HEXA es la division del número RGB/16 y convertirlo con la tabla
Segundo es el resto
255/16

FF


*/

function rgb(r, g, b){

    r < 0 ? r = 0 : r = r 
    b < 0 ? b = 0 : b = b
    g < 0 ? g = 0 : g = g

    r > 255 ? r = 255 : r = r 
    b > 255 ? b = 255 : b = b
    g > 255 ? g = 255 : g = g

    //r/16 -> primeraSubCadena(transformar) r%16 -> segundaSubCadena(transformar)

    let primeraSubCadenaR = Math.trunc(r/16)
    let segundaSubCadenaR = Math.trunc(r%16)

    let primeraSubCadenaG = Math.trunc(g/16)
    let segundaSubCadenaG = Math.trunc(g%16)

    let primeraSubCadenaB = Math.trunc(b/16)
    let segundaSubCadenaB = Math.trunc(b%16)

    let rHexArray = [primeraSubCadenaR, segundaSubCadenaR]
    let gHexArray = [primeraSubCadenaG, segundaSubCadenaG]
    let bHexArray = [primeraSubCadenaB, segundaSubCadenaB]

    let rConvert = convert(rHexArray)
    let gConvert = convert(gHexArray)
    let bConvert = convert(bHexArray)

    return rConvert+gConvert+bConvert
  }

  function convert(arr){
    for(let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case 10:
                arr[i] = 'A'
                break
            case 11:
                arr[i] = 'B'
                break
            case 12:
                arr[i] = 'C'
                break
            case 13:
                arr[i] = 'D'
                break
            case 14:
                arr[i] = 'E'
                break
            case 15:
                arr[i] = 'F'
                break  
        }
    }

    return arr.join('')
  }


