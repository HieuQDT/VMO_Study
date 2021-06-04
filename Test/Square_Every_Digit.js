// You are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 181181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  let string_result = "";
  const string_input = num.toString();                      //turn num into a string
  const array_input = string_input.split('');               //turn string into array 
  const array_result = array_input.map((i) => i * i);       //use map to square all elements in array
  for (let i = 0; i < array_result.length; i++) {           //check phone_number for more details
    string_result += `${array_result[i]}`
  }
  let result = parseInt(string_result)                      //
  return result
}
console.log(squareDigits(1234));

//Test toString
const a = 12345;
const b = a.toString();
//console.log(b);
const c = b.split('');
//console.log(c);
const d = c.map((i) => { return i * i });
console.log('d = ', d); //[ 1, 4, 9, 16, 25 ]


//Cách 2
function squareDigits_2(num) {
  return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));
}
console.log(squareDigits_2(12345))

//cách 3
function squareDigits_3(num) {
  var string = num.toString();
  var results = [];
  for (var i = 0; i < string.length; i++) {
    results[i] = string[i] * string[i];
  }
  return Number(results.join(''));
}
console.log(squareDigits_3(12345));