//Write a program that will calculate the number of trailing zeros in a factorial of a given number.
//N! = 1 * 2 * 3 * ... * N

function zeros(n) {
    if (n < 0) { return -1; }
    let result = 0;
    // Keep dividing n by powers of 5 and update
    //The Math.floor() function returns the largest integer less than or equal to a given number.
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {       //for i=5, math.floor(15/5)=3 >=;  
        result += Math.floor(n / i);
        return result;
    }
}


console.log(zeros(75))