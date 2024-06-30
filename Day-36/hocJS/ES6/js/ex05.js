class User {
  name;
  email;
  #age = 32; // Private
  static message = `F8`; // gọi được bên ngoài với tên của Class(ko cần thông qua đối tượng)
  #data = [`item1`, `item2`, `item3`];
  constructor(name, email) {
    console.log("user constructor");
    this.name = name;
    this.email = email;
  }
  #getName() {
    return this.name;
  }
  #getEmail() {
    return this.email;
  }
  #getAge() {
    return this.#age;
  }
  getInfo() {
    return [this.#getName(), this.#getEmail(), this.#getAge()];
  }
  get latest() {
    return this.#data[this.#data.length - 1];
  }
  set latest(item) {
    return this.#data.push(item);
  }
}
const user = new User("Đức Minh", "dmin@gmail.com");
// console.log(user.getInfo());
// console.log(User.message);
user.latest = "Item 4";
console.log(user.latest);

//element.innerHTML ==> Lấy nôi dung
//element.innerHTML =`Noi dung` ==> cập nhật nội dung mới
