// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated 
// by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
    if (names.length == 1) {
        const str = Object.values(names[0]);
        return str.toString();
    }
    else if (names.length == 2) {
        const str = `${Object.values(names[0])}` + ' & ' + `${Object.values(names[1])}`;
        return str
    }
    else if (names.length >= 3) {
        const last_element = names.reverse().shift();
        const near_last_element = names.reverse().pop();
        let str_1 = ""
        for (let i = 0; i < names.length; i++) {
            str_1 += `${Object.values(names[i])}` + ', '
        }
        const str_2 = str_1 + `${Object.values(near_last_element)}` + ' & ' + `${Object.values(last_element)}`
        return str_2
    }
    else {
        const str = '';
        return str
    }
}

const zero = list([])
console.log(zero)

const one = list([{ name: 'Bart' }])
console.log('This is one: ', one)

const two = list([{ name: 'Bart' }, { name: 'Lisa' }])
console.log('This is two: ', two)

const three = list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]) 
console.log('This is three or more: ', three) //'Bart, Lisa, Maggie, Homer & Marge'


//2nd
const list_2 = (names) => names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")

//3rd
function list_3(names) {
    names = names.map(function (v) { return v.name });
    return names.concat(names.splice(-2).join(' & ')).join(', ');
}
