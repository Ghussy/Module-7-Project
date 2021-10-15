const sentance1 = "The quick brown fox jumps over the lazy dog!"
const sentance2 = "I like cats, but not mice"


function isPangram(s) {
    let alphabet = Array.from(Array(10).keys());
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "not pangram";
     }
    }
   
   return "pangram";
 }

 console.log(isPangram(sentance2));