// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(word) {
    const array = word.split('')
    if (array.length % 2 != 0) {
        let i = Math.floor(array.length / 2)
        return `${array[i]}`
    } else {
        let i = Math.floor(array.length / 2)
        return `${array[i - 1]}${array[i]}`
    }
}

console.log(getMiddle('heLlo'))
console.log(getMiddle("abcdefgh"))


//Cách 2 
function getMiddle_2(s) {
    return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}
console.log(getMiddle_2('heLlo'))
console.log(getMiddle_2("abcdefgh"))

//Cách 3
function getMiddle_3(s)
{
  return s.substring(Math.ceil(s.length/2)-1, Math.floor(s.length/2)+1)
}