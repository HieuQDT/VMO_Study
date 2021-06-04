//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

const solution = (input_number) => {
  let sum = 0;
  for (let i = 0; i < input_number; i++) {      //Conditions: if i%3 or i%5 return an answer with same type and value as 0
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  } return sum;
}

console.log(solution(10));