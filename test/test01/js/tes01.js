// tạo arr2 rỗng
// for ngoài : for(i = 0;i<arr.length; i++)
/// for : for j = 0; j < arr[i].length; j++)
// arr2.push(arr[i][j]);

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var newArr = [];
// function flat(n) {
//   if (Array.isArray(n)) {
//     for (var i = 0; i < n.length; i++) {
//       flat(n[i]);
//     }
//   }
//   //   console.log(n[i]);
//   newArr.push(n);
// }
// for (var i = 0; i < arr.length; i++) {
//   flat(arr[i]);
// }
// // function flat2(n){
// //     if(!n.isArray)
// // }
// console.log(newArr);
// console.log(flat(arr));

function flat(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) newArr.push(arr[i]);
    flat(arr[i]);
    // if (Array.isArray(arr[i])) {
    //   flat(arr[i]);
    // } else {
    //   newArr.push(arr[i]);
    // }
  }
}
flat(arr);
console.log(newArr);
