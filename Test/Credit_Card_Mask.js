//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
//However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//Your task is to write a function maskify, which changes all but the last four characters into '#'.

const maskify = (cc) => {
    const a = cc.slice(0,-4).replace(/./g,'#') + cc.slice(-4);
    //Metacharacter /. use to find character between a single space
    //Metacharacter /. use to find global
    return a;
}
console.log(maskify('1231231234567890'))

//Test slice
const cc = '1234567890'
const b = cc.slice(-4);
const d = cc.slice(0,-4);
console.log(d);
console.log(b);

//Test metacharacter
const text = "Hello, its me and this is and e text."
const e = /H...o/g;
const result = text.match(e);
console.log(result)
