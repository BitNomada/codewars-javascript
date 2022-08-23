/*The goal of this exercise is to convert a string to a new string where each character in the new string is 
"(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. Ignore capitalization 
when determining if a character is a duplicate.*/

function duplicateEncode(word){
  
    let newString = ""
    word = word.toLowerCase();
    
    for(let i = 0; i < word.length; i++){
      let contador = 0
      
      for(let j = 0; j < word.length; j++){
          if(word[j] == word[i]){
            contador++
          }
        }
      
        if(contador > 1){
          newString += ")"
        } else {
          newString += "("
        }
      
    }
    return newString
  }