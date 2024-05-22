//reduce(callback, initialValue)
/*
callback có 4 tham số
- prevValue
- currentValue
- index
- array --> Mảng ban đầu

initialValue: Giá trị khởi tạo

Cách hoạt động

1. Không có initialValue
- Vòng lặp chạy từ phẩn tử thứ 2 cho đén hết
- preValue của lần đầu lặp đầu tiên chính là phần tử đầu tiên của mảng
- currentValue là các phần tử của mảng qua mỗi lần lặp
- preValue của lần lặp sau sẽ là return của lần lặp trước
- Giá trị của vòng lặp reduce sẽ là lần return cuối cùng


2. Có initialValue
- Vòng lặp sẽ chạy từ đầu
- preValue của lần lặp đầu tiên chính là initialValue
- currentValue là các phần tử của mảng qua mỗi lần lặp
- preValue của lần lặp sau sẽ là return của lần lặp trước
- Giá trị của vòng lặp reduce sẽ là lần return cuối cùng
*/

// var numbers = [5, 10, 15, 20, 25, 30];
// var result = numbers.reduce(function (prev, current, index) {
//   console.log(`prev = ${prev}`, `currrent = ${current}`, `index = ${index}`);
//   return current;
// });

// var total = numbers.reduce(function (prev, current) {

//   return prev + current;
// }, 0);
// console.log(total);

var numbers = [2, 9, 5, 10, 1, 3, -5];
//Tìm phần tử lớn nhất dùng reduce

// var max = numbers.reduce(function (prev, current) {
//   var max = prev;
//   if (current > max) {
//     max = current;
//   }
//   return max;
// });

// var max = numbers.reduce(function (prev, current) {
//   if (prev < current) {
//     return current;
//   }
//   return prev;
// });
// console.log(max);

var users = ["An", "Tùng", "Đạt", "Quân", "Đạt", "An"];
//Xóa các phần tử trùng nhau trong mảng users

// var newArr = users.reduce(function (prev, current) {
//   var check = false;
//   //   console.log(prev);
//   if (prev.includes(current)) {
//     check = true;
//   }
//   if (!check) {
//     prev.push(current);
//   }
//   return prev;
// }, []);
// console.log(newArr);

var arr1 = [5, 2, 1, 6, 9];
var arr2 = [2, 1, 6];
//tìm phần tử khác nhau giữa 2 mảng (Có trong mảng 1 nhưng không có trong mảng 2)
//output [5,9]
// var newArr = arr1.reduce(function (prev, current) {
//   var check = false;
//   for (var i = 0; i < arr2.length; i++) {
//     if (arr2[i] == current) {
//       check = true;
//     }
//   }
//   if (!check) {
//     prev.push(current);
//   }

//   return prev;
// }, []);

// var newArr = arr1.reduce(function (prev, current) {
//   if (!arr2.includes(current) && !prev.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);
// console.log(newArr);

var numbers = [1, [2, 3], 4, [[5, 6]], 7, [[[8, 9]]]];
//Yêu cầu: Làm phẳng mảng numbers
/**
 - Dùng reduce
 - Ko dùng hàm flat()
 */
//Cách mình
function flat(n) {
  var newArr = n.reduce(function (prev, current) {
    if (!Array.isArray(current)) {
      prev.push(current);
      console.log(current);
    } else {
      prev = prev.concat(flat(current));
    }
    return prev;
  }, []);
  return newArr;
}
console.log(flat(numbers));

//Cách thầy

// var flatArr = function (arr) {
//   return arr.reduce(function (prev, current) {
//     //Kiểm tra xem phần tử có phải là mảng không
//     //Nếu là mảng ==> Gọi hàm đệ quy
//     if (Array.isArray(current)) {
//       return prev.concat(flatArr(current));
//     }
//     //Ngược lại, Thêm current vào prev
//     return prev.concat(current);
//   }, []);
// };

// var newArr = flatArr(numbers);
// console.log(newArr);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var size = 2;
//chunk array với size tương ứng
// Output: [[1,2],[3,4],[5,6],[7,8],[9]]
//Yêu cầu: dùng reduce
//Cách của mình
// var position = 0;
// var newArr = numbers.reduce(function (prev, current, index) {
//   if (!index % 2 == 0) {
//     prev =
//   }

//   return prev.push(current);
// }, []);
// console.log(newArr);
//Cách của thầy
// var chunkArr = numbers.reduce(
//   function (prev, current) {
//     //Kiểm tra số lượng phần tử của mảng con cuối cùng
//     if (prev[prev.length - 1].length < size) {
//       //Thêm phần tử mới vào mảng con
//       prev[prev.length - 1].push(current);
//     } else {
//       //Ngược lại, thêm 1 mảng mới (Them đoạn mới)
//       prev.push([current]);
//     }
//     return prev;
//   },
//   [[]]
// );
// console.log(chunkArr);

//Cách bạn Dũng
// var chunkArr2 = numbers.reduce(function (prev, _, index) {
//   if (index % size === 0) {
//     var subArr = numbers.slice(index, index + size);
//     prev.push(subArr);
//   }
//   return prev;
// }, []);

// console.log(chunkArr2);
//Tìm hiểu
//Array.from()
//Array.keys()
//Tham chiếu Array
// Copy Array
// var arr1 = ["Đức Minh", "dminso1koaiso2@gmail.com"];

// var arr2 = arr1;
// arr2[0] = "Đức Minh F8";
// console.log(arr1);
