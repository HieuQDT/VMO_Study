//Bài tập
// Cho 1 array gồm 10 items: numbers = [4,2,5,1,2,3,5,9,8,1]
const numbers = [4, 2, 5, 1, 2, 3, 5, 9, 8, 1];

// ex1: sort từ bé đến lớn array bên trên bằng 2 cách function có sẵn của array và sử dụng vòng lặp for
var ex1_1 = numbers.sort()
console.log(ex1_1);
//nếu sort không thêm điều kiện sẽ sort theo thứ tự abc

function sort_2(array) {
    let empty_array = [];
    for (let a = 0; a < array.length; a++) {                            //a là số thứ tự của các phần tử trong array
        if (array[a] <= array[a + 1] || array[a + 1] == undefined) {    //loop cho đến khi số thứ tự a <= a+1 HOẶC a+1 = undefined
            empty_array.push(array[a]);                                 //nhét giá trị vào empty array, tự động in số cuối cùng
        }
    }
    return empty_array;
}
const ex1_2 = sort_2(numbers);
console.log(ex1_2);

// ex2: cộng mỗi item 1 đơn vị sử dụng map, vd: [1,2,3] => [2,3,4]
const ex2 = numbers.map(x => x + 1);
console.log(ex2);