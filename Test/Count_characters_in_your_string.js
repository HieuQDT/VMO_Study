// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {
    if (string) {
        const split = string.split('');
        const counts = {};
        split.forEach(x => { counts[x] = (counts[x] || 0) + 1; });
        // he creates an associative array object called count that will have a key value pair for each unique element 
        // in the array, where the key is the unique element value and the value is the count. 
        // He iterates over the array and for each value either increments the value or creates the key value pair 
        // (the value of the non-existent key evaluates to undefined so the || operator takes a zero instead and adds the 1)

        return counts;
    }
    else return {};
}
console.log(count('aba'))

//2nd
function count_2(string) {
    let empty_obj = {};
    for (let i = 0; i < string.length; i++) {
        if (empty_obj.hasOwnProperty(string[i])) {
            empty_obj[string[i]] += 1;
        } else empty_obj[string[i]] = 1;

    } return empty_obj
}
console.log(count_2('aba'))