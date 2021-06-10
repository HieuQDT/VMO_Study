// Given two arrays of strings a1 and a2 return a sorted array r 
//in lexicographical order of the strings of a1 which are substrings of strings of a2.
//
// Example 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]
//
// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

function inArray(array1, array2) {
    let empty_array = [];
    for (let i = 0; i < array1.length; i++) {               //start the loop with each array1 elements
        for (let j = 0; j < array2.length; j++) {           //start second loop with each array2 elements    
            if (array2[j].includes(array1[i])) {
                empty_array.push(array1[i]);
            }
        }
    }                                       // Set only allow unique elements
    const uniq = [...new Set(empty_array)]  //https://stackoverflow.com/a/9229821
    return uniq.sort()
}
const a1 = ["arp", "live", "strong"]
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(inArray(a1, a2))


//Cách 2 
function inArray_2(array1,array2){
    return array1
      .filter(a1 => array2.find(a2 => a2.match(a1)))
      .sort()
  }

  