//Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.
//Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
    if (num <= 3) return num > 1;
    if ((num % 2 === 0) || (num % 3 === 0)) return false;

    let count = 5;
    while (Math.pow(count, 2) <= num) {
        if (num % count === 0 || num % (count + 2) === 0) return false;
        count += 6;
    }
    return true;
}

console.log(isPrime(169))

//2nd
function isPrime_2(num) {
    if (num < 2) return false;
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime_2(169))

//3rd
const isPrime = num => {
    for (let i = 2; i <= num ** .5; i++) {
      if (!(num % i)) return false;
    }
    return num > 1;
  }