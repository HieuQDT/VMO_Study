//Bài tập
// Cho 1 array gồm 10 items: numbers = [4,2,5,1,2,3,5,9,8,1]
const numbers = [4, 2, 5, 1, 2, 3, 5, 9, 8, 1];

// ex3: sử dụng forEach và while để chia array trên thành 2 mảng, 1 mảng chẵn, 1 mảng lẻ 
function even_odd(array) {
    let even_array = [];
    let odd_array = [];
    array.forEach(element => { //với mỗi phần tử trong array
        if (element % 2 == 0) {
            even_array.push(element);
        }
        else odd_array.push(element);
    });
    console.log(even_array);
    console.log(odd_array);
}
even_odd(numbers);

// ex4: sử dụng reduce để loại bỏ những số trùng lặp, vd: có 2 số 1 ở trong mảng trên thì loại bỏ 1 số, chỉ giữ lại 1 số 1
const ex4 = numbers.reduce((a, b) => {                      //toàn bộ phần arrow function là previousValue
    if (a.indexOf(b) === -1) {                              //a là array, nếu như bên trong a chưa có giá trị b từ numbers (=== -1)
        a.push(b);                                          //thì bỏ b vào trong a
    }                                                       //indexOf trả về index của phần tử array, hoặc -1 nếu chưa tồn tại
    return a;
}, []);                                                     //array trống [] là currentValue
console.log(ex4);

// ex5: sử dụng reduce để tính tổng tất cả các số trong array
const ex5 = (a, b) => a + b;
console.log(numbers.reduce(ex5));
