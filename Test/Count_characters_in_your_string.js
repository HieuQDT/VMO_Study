// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    if (string) {
        const split = string.split('')
        const counts = {};
        split.forEach(x => { counts[x] = (counts[x] || 0) + 1; });
        return counts;
    }
    else return {};
}

console.log(count('abababab'))