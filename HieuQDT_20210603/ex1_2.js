//Bài tập
// Cho 1 array gồm 10 items: numbers = [4,2,5,1,2,3,5,9,8,1]
const numbers = [4, 2, 5, 1, 2, 3, 5, 9, 8, 1];
const a = 11111;

// ex1: sort từ bé đến lớn array bên trên bằng 2 cách function có sẵn của array và sử dụng vòng lặp for
var ex1_1 = numbers.sort((a, b) => {
    return a - b
});
console.log('============Result Ex1_1=============> ', ex1_1);
//nếu sort không thêm điều kiện sẽ sort theo thứ tự abc

function sort_2(nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1;
        let temp = nums[i];
        while (j >= 0 && nums[j] > temp) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = temp;
    }
    return nums;
}
const ex1_2 = sort_2(numbers);
console.log('============Result Ex1_2=============> ', ex1_2);

// ex2: cộng mỗi item 1 đơn vị sử dụng map, vd: [1,2,3] => [2,3,4]
const ex2 = numbers.map(x => x + 1);
console.log('============Result Ex2=============> ', ex2);