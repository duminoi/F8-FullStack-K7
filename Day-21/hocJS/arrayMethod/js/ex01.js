console.log(Array.prototype);

var users = ["user 1", "user 2", "user 3", "user 4", "user 2"];
// // 1.at(index) ==>Lấy phần tử mảng theo index
// console.log(users.at(0));

// //2. concat(arr1, arr2, arr3, ...) ===> Nối mảng
// console.log(users.concat([1, 2, 3], [4, 5, 6]));

// // 3. fill(value) ==> Thay thế tất cả các phần từ trong mảng thành 1 giá trị
// users.fill(0);
// console.log(users);

//4. indexOf(value) ==> tìm phần tử trong mảng và trả về phần từ đầu tiên
// console.log(users.indexOf("user 2"));

// //5.lastIndexof(value) ==> Tìm phần tử trong mảng và trả về index cuối cùng
// console.log(users.lastIndexOf("user 2"));

// //6. includes(value) ==> Tìm phần tử trong mảng và trả về true/false
// console.log(users.includes("user 3"));

//7. slice(start, end) ==> Cắt mảng từ index --> end -1
// console.log(users.slice(1, 2));
// console.log(users.slice(1));
// console.log(users.slice(-2));

//8. push(value1, value2, value3) ==> Thêm phần tử vào cuối mảng và thay đổi mảng ban đầu
//Giá trị của hàm push là tổng số lượng của cả mảng sau khi thêm
// var count = users.push(1, 2, 3, "A", "B", "C");
// console.log(count);
// console.log(users);

//9. unshift(value1, value2, value3) ==> Thêm phần tử đầu mảng và thay đổi mảng ban đầu
//Giá trị của hàm unshift là tổng số lượng phần tử của cả mảng sau khi thêm
// var count = users.unshift(1, 2, 3, "A", "B", "C");
// console.log(count);
// console.log(users);

// //10. pop() --> Xóa phần tử cuối mảng và trả về giá trị phần tử vừa xóa(Thay đổi mảng ban dầu)
// var value = users.pop();
// console.log(value);
// console.log(users);

// //11. shift() --> Xóa phần tử đầu mảng và trả về giá trị phần tử vừa xóa(Thay đổi mảng ban dầu)
// var value = users.shift();
// console.log(value);
// console.log(users);

//12. reverse() ==> Đảo ngược mảng (Trả về mảng và thay đổi mảng ban đầu)
// var newArr = users.reverse();
// console.log(newArr);
// console.log(users);

//13. join() ==> Nối các phần tử mảng thành chuỗi
// console.log(users.join(" "));

var fullName = "Nguyễn Đức Minh";
//Lấy tên
var firstName = fullName.split(" ").slice(-1).join();
console.log(firstName);
