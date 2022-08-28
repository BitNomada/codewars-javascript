let RomanNumerals = {
    toRoman : function(number){
        number > 4000 ? number = 4000 : number = number

        let millares 
        let centenas
        let decenas
        let unidades
    
        let strNumber = number.toString()

        if(strNumber.length == 4){
            millares = Math.trunc(number/1000) 
            centenas = Math.trunc((number - millares * 1000)/100)
            decenas = Math.trunc((number - millares*1000 - centenas*100)/10)
            unidades = number - millares * 1000  - centenas * 100 - decenas*10
        } else if (strNumber.length == 3) {
            centenas = Math.trunc(number/100)
            decenas = Math.trunc((number - centenas*100)/10)
            unidades = number - centenas * 100 - decenas*10

        } else if(strNumber.length == 2){
            decenas = Math.trunc(number/10)
            unidades = number - decenas * 10 
            console.log(number)
        } else {
            unidades = number
            console.log(number)
        }
    
        let millaresToRoman = 'M'.repeat(millares)
        let centenasToRoman = ''
        let decenasToRoman = ''
        let unidadesToRoman = ''
    
        if(centenas < 4){
            centenasToRoman = 'C'.repeat(centenas)
        } else if(centenas == 4){
            centenasToRoman = 'CD'
        } else if (centenas == 5){
            centenasToRoman = 'D'
        } else if (centenas > 5 && centenas < 9){
            let c = 'C'.repeat(centenas - 5)
            centenasToRoman = `D${c}`
        } else if (centenas == 9){
            centenasToRoman = 'CM'
        }
    
    
        //Converting decenas
    
        if(decenas < 4){
            decenasToRoman = 'X'.repeat(decenas)
        } else if (decenas == 4){
            decenasToRoman = 'XL'
        } else if (decenas == 5){
            decenasToRoman = 'L'
        } else if (decenas > 5 && decenas < 9){
            let d = 'X'.repeat(decenas - 5)
            decenasToRoman = `V${d}`
        } else if (decenas == 9){
            decenasToRoman = 'XC'
        }
    
        //Converting U
        if(unidades < 4){
            unidadesToRoman = 'I'.repeat(unidades)
        } else if (unidades == 4){
            unidadesToRoman = 'IV'
        } else if (unidades == 5){
            unidadesToRoman = 'V'
        } else if (unidades > 5 && unidades < 9){
            let d = 'I'.repeat(unidades - 5)
            unidadesToRoman = `V${d}`
        } else if (unidades == 9){
            unidadesToRoman = 'IX'
        }

        return `${millaresToRoman}${centenasToRoman}${decenasToRoman}${unidadesToRoman}`
    } , 
    fromRoman : function(roman){
        let map = {
            IV:4,
            IX:9,
            XL:40,
            XC:90,
            CD:400,
            CM:900,
            I:1,
            V:5,
            X:10,
            L:50,
            C:100,
            D:500,
            M:1000
            },
            
            value = 0;
          
          for (let i = 0; i < roman.length; i++) {
            let two = map[roman[i]+roman[i+1]], 
                one = map[roman[i]];
            
            if (two != null) { 
              value += two; i++; 
            } else if (one != null) {
              value += one;
            }
          }
          return value;
    }
}


