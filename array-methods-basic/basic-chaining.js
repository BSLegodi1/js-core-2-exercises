/*
    Refactor this to use .map and .filter together (chaining)
*/
// var vowels = ["a", "e", "i", "o", "u"];

// function getUpperCaseVowels(letters) {
//     var result = [];
//     for(var i = 0; i < letters.length; i++) {
//         if(vowels.indexOf(letters[i]) !== -1) {
//             result.push(letters[i].toUpperCase());
//         }
//     }
//     return result;
// };

var vowels = ["a", "e", "i", "o", "u"];
function getUpperCaseVowels(alphabet) {
    var result = alphabet.filter(letter => vowels.indexOf(letter)>-1).map(letter=>letter.toUpperCase());
  

    return result;
}







module.exports = getUpperCaseVowels;