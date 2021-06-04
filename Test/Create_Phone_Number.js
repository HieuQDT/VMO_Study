//Write a function that accepts an array of 10 integers (between 0 and 9), 
//that returns a string of those numbers in the form of a phone number.
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

const createPhoneNumber = (numbers) => {
    let result = "(";
    for (let i = 0; i < numbers.length; i++) {
        if (i === 3) {                      //i chạy đến thứ tự số 3 (aka giá trị 4 trong array), thì nó cho ) trước khi chạy tiếp
            result += ') '                  //lấy chuỗi cũ đến đây cộng thêm vào
        }
        if (i === 6) {
            result += '-'
        }
        result += `${numbers[i]}`

    } return result
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// const first = 'Hewo';
// const second = 'World';
// const third = 'peko';
// console.log('(' + `${first}` + ') ' + `${second}` + "-" + `${third}`)

//Cách 2
function createPhoneNumber_2(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}
console.log(createPhoneNumber_2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


//Cách 3
function createPhoneNumber_3(numbers) {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
console.log(createPhoneNumber_3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))