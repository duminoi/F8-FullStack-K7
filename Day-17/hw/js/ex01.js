//----------------variable bai1 -------------------
var btn1 = document.getElementById("btn1");

//----------------variable bai1 -------------------

//----------------variable bai2 -------------------
var btn2 = document.getElementById("btn2");
//----------------variable bai2 -------------------

//----------------variable bai3 -------------------
var btn3 = document.getElementById("btn3");
//----------------variable bai3 -------------------

//----------------variable baì4 -------------------
var btn4 = document.getElementById("btn4");
//----------------variable baì4 -------------------

//----------------variable baì5 -------------------
var btn5 = document.getElementById("btn5");
var a4 = parseInt(document.getElementById("inputA4").value);
var b4 = parseInt(document.getElementById("inputB4").value);
var c4 = parseInt(document.getElementById("inputC4").value);
//----------------variable baì5 -------------------

//-----------------function b1------------------------
function swap(a, b) {
  [a, b] = [b, a];
  document.getElementById("resultA").innerHTML = `${a}`;
  document.getElementById("resultB").innerHTML = `${b}`;
}

btn1.addEventListener("click", (event) => {
  event.preventDefault();
  var a1 = document.getElementById("inputA").value;
  var b1 = document.getElementById("inputB").value;
  if (a1 == "" && b1 == "") {
    alert("Vui lòng nhập a,b");
  } else {
    swap(a1, b1);
  }
});

//-----------------function b1------------------------

//-----------------function b2------------------------
function calc() {
  var s = 10 + 20 + (5 ^ 10) / 2;
  document.getElementById("result2").innerHTML = `${s}`;
}
btn2.addEventListener("click", (event) => {
  event.preventDefault();
  calc();
});
//-----------------function b2------------------------

//-----------------function b3------------------------
function max(a, b, c) {
  var max = 0;
  if (a > b) {
    if (b > c) {
      max = a;
    } else {
      if (a > c) {
        max = a;
      } else {
        max = c;
      }
    }
  } else {
    if (b < c) {
      max = c;
    } else {
      max = b;
    }
  }
  return max;
}

btn3.addEventListener("click", (event) => {
  event.preventDefault();
  var a2 = parseInt(document.getElementById("inputA2").value);
  var b2 = parseInt(document.getElementById("inputB2").value);
  var c2 = parseInt(document.getElementById("inputC2").value);
  if (isNaN(a2) || isNaN(b2) || isNaN(c2)) {
    alert("Vui lòng nhập a, b, c");
  } else {
    document.getElementById("result3").innerHTML = max(a2, b2, c2);
  }
});

//-----------------function b3------------------------

//-----------------function b4------------------------
function checkop(a, b) {
  if (a * b > 0) {
    document.getElementById("result4").innerHTML = `Cùng dấu`;
  } else {
    if (a * b < 0) {
      document.getElementById("result4").innerHTML = `Khác dấu`;
    }
  }
}

btn4.addEventListener("click", (event) => {
  event.preventDefault();
  var a3 = parseInt(document.getElementById("inputA3").value);
  var b3 = parseInt(document.getElementById("inputB3").value);

  if (isNaN(a3) || isNaN(b3)) {
    alert("Vui lòng nhập vào a,b");
  } else {
    checkop(a3, b3);
  }
});
//-----------------function b4------------------------

//-----------------function b5------------------------
function sort(array) {
  for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      if (array[i] > array[j]) {
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
}
btn5.addEventListener("click", (event) => {
  event.preventDefault();

  var arr = [a4, b4, c4];
  if (isNaN(a4) || isNaN(b4) || isNaN(c4)) {
    alert("Vui lòng nhập a,b,c");
  } else {
    document.getElementById("result5").innerHTML = sort(arr);
  }
});
//-----------------function b5------------------------
