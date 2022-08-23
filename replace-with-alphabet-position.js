/*n this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
    //Saving the alphabet into const
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
                      "v", "w", "x", "y", "z"]
                 
    //Variable to save the string to output
    let textToInt = ""
    
    //Transform the text to analysce
    text = text.replace(/[^a-zA-Z ]/g, "")
    text = text.replace(/ /g,'')
    text = text.toLowerCase()
   
    
    //Analyse the text and save it
    for(let i = 0; i < text.length; i++){
  
      let indice = alphabet.indexOf(text[i])
      indice += 1
      
      if(i === 0){
        textToInt += indice
      } else {
      textToInt += " " + indice
      }
    }
  
    return textToInt;
  }
