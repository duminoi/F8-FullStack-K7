// export { product } from "../modules/module3.js";
import { product } from "../modules/module3.js";
export { product };
// console.log("product", product);
const a = 10;
const b = 20;
export function something() {
  return "hello something";
}

export { a, b };
export function getMessage() {
  console.log("hello");
}
const c = 50;
export default c; // đặt tên là gì thì bên import gọi ra cũng được(gọi ra tên bất kì)

/*
    app.js ==> modules ==> 10 file
    app.js ==> Import 10 lần
    Giải pháp:
    Trong folder modules ==> Tạo file index.js ==> Import 10 file và export để app.js sử dụng
*/
