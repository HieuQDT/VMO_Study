// ex6: viết 1 function getTotalObjectValue 1 parameter truyền vào obj và 1 function getTotalArrayValue 2 paramter, 
//1 la arr, 2 la callback, function getTotalObjectValue cần kiểm tra obj truyền vào có valid không, 
//nếu không sẽ trả về lỗi, nếu valid thì lấy hết value của obj đó chuyển thành 1 array, 
//sau đó gọi đến getTotalArrayValue để tính tổng các số trong array đó và dùng callback để lấy dữ liệu về

function object_create(num_1, num2, num3, num4, num5) {
    let obj = { num_1, num2, num3, num4, num5 };
    return obj;
}
const object = new object_create(40, 11, 9, 45, 416);

const getTotalObjectValue = obj => {              //a là số thứ tự các phần tử bên trong object (VD: a=0 thì là keys:num_1, value:40)
    if (Object.keys(obj) == 0) {
        console.log('Error');
    }
    else return Object.values(obj)
}
console.log(getTotalObjectValue(object));

const getTotalArrayValue = (array) => {
    return new Promise(function (resolve, reject) {
        if (array == false) {
            reject('fail');
        } else {
            let sum = 0
            array.forEach(element => {
                sum += element;
            });
            resolve(sum)
        }
    })
}
getTotalArrayValue(getTotalObjectValue(object))
    .then(result => console.log(result))
    .catch(error => console.log(error))