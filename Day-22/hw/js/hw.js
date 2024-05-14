//------------------------b1---------------------
var btn1 = document.getElementById("btn1");
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = arrA.filter(function (arrA) {
  return arrB.includes(arrA);
});
var finalResult = result.filter(function (value, index, arr) {
  return arr.indexOf(value) === index;
});
btn1.addEventListener("click", () => {
  document.getElementById("result1").innerHTML = `[${finalResult}]`;
});
//------------------------b1---------------------

//------------------------b2---------------------
var btn2 = document.getElementById("btn2");
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var flattern = [];
function flat(arr) {
  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat(arr[i]);
    } else {
      flattern.push(arr[i]);
    }
  }
  return flattern;
}
// console.log(flat(arr));
btn2.addEventListener("click", () => {
  document.getElementById("result2").innerHTML = `[${flat(arr)}]`;
});
//------------------------b2---------------------

//------------------------b3---------------------
var btn3 = document.getElementById("btn3");
var arrb3 = [
  ["a", 1, true],
  ["b", 2, false],
];
var newArrb3 = [];
var stringArr = [];
var numberArr = [];
var boolArr = [];
arrb3.forEach(function (value) {
  for (let i = 0; i < value.length; i++) {
    if (typeof value[i] == "string") {
      stringArr.push(value[i]);
    }
    if (typeof value[i] == "number") {
      numberArr.push(value[i]);
    }
    if (typeof value[i] == "boolean") {
      boolArr.push(value[i]);
    }
  }
});
newArrb3.push(stringArr);
newArrb3.push(numberArr);
newArrb3.push(boolArr);

btn3.addEventListener("click", () => {
  document.getElementById(
    "result3"
  ).innerHTML = `[${newArrb3}] em ko biết sao ở đây ko có dấu [] ngăn cách mảng,xem ở console.log hộ em nhé ^^`;
});
// console.log(stringArr);
// console.log(numberArr);
// console.log(boolArr);
console.log(newArrb3);

//------------------------b3---------------------

//------------------------b4---------------------
var btn4 = document.getElementById("btn4"); // Giả sử đây là nút để kích hoạt hàm display
var board = document.getElementById("board");

function display() {
  var arr = [
    [
      "Tiêu đề bài viết 1",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit",
      `./img/98-300x200.jpg`,
    ],
    [
      "Tiêu đề bài viết 2",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit",
      `./img/98-300x200.jpg`,
    ],
    [
      "Tiêu đề bài viết 3",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit",
      `./img/98-300x200.jpg`,
    ],
  ];

  for (const index in arr) {
    const list = document.createElement("div");
    list.className = "list";

    const contentWrapper = document.createElement("div");
    contentWrapper.className = "contentWrapper ";
    const hr = document.createElement("hr");

    const articleElement = document.createElement("p");
    articleElement.className = "para";
    articleElement.textContent = arr[index][1]; // Nội dung
    // console.log(article[index][1]);

    const titleElement = document.createElement("h2");
    titleElement.textContent = arr[index][0]; // Tiêu đề
    const img = document.createElement("img");

    if (index == 1) {
      img.className = "img2";
    }
    img.src = `${arr[index][2]}`; // Đường dẫn ảnh
    // if (article[0] == "Tiêu đề bài viết 1") {
    //   console.log("stop");
    //   continue;
    // }

    contentWrapper.appendChild(titleElement);
    contentWrapper.appendChild(articleElement);
    list.appendChild(img);
    list.appendChild(contentWrapper);
    board.append(hr);
    board.append(list);
  }
}

btn4.addEventListener("click", () => {
  display();
});

//------------------------b4---------------------
