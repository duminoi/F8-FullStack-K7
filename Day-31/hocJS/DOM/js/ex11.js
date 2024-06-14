var root = document.querySelector("#root");
//Tạo element
var h1 = document.createElement("h1");
h1.innerHTML = "Học lập trình không khó";
h1.className = "title";
h1.id = "title";
h1.addEventListener("click", function () {
  this.style.color = "red";
});

//h1: Node Element
//Việc cần làm: Đưa node element vào cây DOM(Xác định rõ vị trí cần đưa vào)
root.append(h1); //thêm xuống cuối

var h2 = document.createElement("h2");
h2.innerText = "Học JS rất dễ";
root.prepend(h2); //Đẩy lên trên
var a = document.createElement("a");
a.href = "https:/fullstack.edu.vn";
a.innerText = "F8";
h1.append(a);

//Bài tập:
//1.Thêm đoạn html sau vào dưới cùng của #root
//2.Click vào button "Add" ==> thêm mới li số thứ tự tăng dần
/*
<ul class = "menu">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>

</ul>
<button>Add</button>
*/

var ul = document.createElement("ul");
ul.classList.add("menu");

root.append(ul);
var btn = document.createElement("button");
btn.innerHTML = "Add";
root.append(btn);
var index = 1;
btn.addEventListener("click", function () {
  var li = document.createElement("li");
  li.innerText = `item ${index}`;
  ul.append(li);
  index++;
});

var insertBeforeBtn = document.createElement("button");
insertBeforeBtn.innerHTML = "insert before";
insertBeforeBtn.addEventListener("click", function () {
  var h3 = document.createElement("h3");
  h3.innerHTML = "Đức Minh";
  root.insertBefore(h3, h1);
  //chèn thẻ p vào sau h1
  var p = document.createElement("p");
  p.innerHTML = "Hello Mọi người";
  if (h1.nextElementSibling) {
    root.insertBefore(p, h1.nextElementSibling);
  } else {
    root.append(p);
  }
});
root.append(insertBeforeBtn);

var updateNodeBtn = document.createElement("button");
updateNodeBtn.innerHTML = "Update Node";
updateNodeBtn.addEventListener("click", function () {
  console.log("Vào Đây");
  var h2 = document.createElement("h2");
  h2.innerText = "Node thay thế";
  root.replaceChild(h2, h1);
  root.removeChild(ul);
});
root.append(updateNodeBtn);
