var root = document.querySelector("#root");
var h1 = document.createElement("h1");
var textNode = document.createTextNode(0);
var button = document.createElement("button");
h1.innerText = "count:";
button.innerHTML = "Click me";
//click vào button thì textNode tăng giá trị
button.addEventListener("click", function () {
  textNode.data++;
});
h1.append(textNode);
root.append(h1);
root.append(button);

//Comment Node
var comment = document.createComment("Hello anh em F8");
root.append(comment);

//XSS
/*
//Cách 1: Xử lý chuỗi bằng cách chuyển: <, > thành html entities
//Cách 2: Tạo các element bằng document.createElement sau đó đưa nội dung vào bằng innerText
*/
