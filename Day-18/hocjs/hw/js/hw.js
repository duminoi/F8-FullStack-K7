//-----------------------variable b1------------------------
var btnTaxi = document.getElementById("btnTaxi");
//-----------------------variable b1------------------------
//-----------------------variable b2------------------------
var kwhbtn = document.getElementById("kwhBtn");
//-----------------------variable b2------------------------

//-----------------------variable b3------------------------
var btn3 = document.getElementById("calc3btn");
//-----------------------variable b3------------------------

//-----------------------variable b4------------------------
var btn4 = document.getElementById("btn4");
//-----------------------variable b4------------------------

//-----------------------variable b5------------------------
var btn5 = document.getElementById("btn5");
//-----------------------variable b5------------------------

//-----------------------variable b6------------------------
var btn6 = document.getElementById("btn6");
let board = document.getElementById("board");
//-----------------------variable b6------------------------

//-----------------------variable b7------------------------
var btnMulti = document.getElementById("btnMulti");

//-----------------------variable b7------------------------

// --------------------- function b1-------------------------
function taxiPrice(sokm) {
  var lastPrice = 0;
  if (sokm <= 1) {
    lastPrice = 15000;
  } else if (sokm > 1 && sokm <= 5) {
    lastPrice = 15000 + 13500 * (sokm - 1);
  } else if (sokm > 5 && sokm <= 120) {
    lastPrice = 15000 + 13500 * 4 + 11000 * (sokm - 5);
  } else if (sokm > 120) {
    var discount = 15000 + 13500 * 4 + 11000 * (sokm - 5) * 0.1;
    lastPrice = 15000 + 13500 * 4 + 11000 * (sokm - 5) - discount;
  }
  return lastPrice;
}

btnTaxi.addEventListener("click", (event) => {
  event.preventDefault();
  var sokm = parseFloat(document.getElementById("inputTaxi").value);
  if (isNaN(sokm) || sokm === "" || sokm === 0) {
    alert("vui lòng nhập đúng định dạng");
  } else {
    var price = taxiPrice(sokm);
    document.getElementById("taxiPrice").innerHTML = `${price} vnd`;
  }
});
// --------------------- function b1-------------------------

// --------------------- function b2-------------------------
function electricPrice(kwh) {
  var elecPrice = 0;
  if (kwh > 0 && kwh <= 50) {
    elecPrice = 1678 * kwh;
  } else if (kwh >= 51 && kwh <= 100) {
    elecPrice = 1678 * 50 + 1734 * (kwh - 50);
  } else if (kwh >= 100 && kwh <= 200) {
    elecPrice = 1678 * 50 + 1734 * 50 + 2014 * (kwh - 100);
  } else if (kwh >= 201 && kwh <= 300) {
    elecPrice = 1678 * 50 + 1734 * 50 + 2014 * 100 + 2536 * (kwh - 200);
  } else if (kwh >= 301 && kwh <= 400) {
    elecPrice =
      1678 * 50 + 1734 * 50 + 2014 * 100 + 2536 * 100 + 2834 * (kwh - 300);
  } else {
    elecPrice =
      1678 * 50 +
      1734 * 50 +
      2014 * 100 +
      2536 * 100 +
      2834 * 100 +
      2927 * (kwh - 400);
  }
  return elecPrice;
}

kwhbtn.addEventListener("click", (event) => {
  event.preventDefault();
  var kwhinput = parseFloat(document.getElementById("kwhInput").value);
  if (kwhinput == 0 && isNaN(kwhinput)) {
    alert("Vui lòng nhập lại");
  } else {
    var kwhprice = electricPrice(kwhinput);
    document.getElementById("electricPrice").innerHTML = `${kwhprice}vnd`;
  }
});

// --------------------- function b2-------------------------

// --------------------- function b3-------------------------
function calc3(n) {
  var temp = 1;
  var s = 0;
  for (let i = 1; i <= n; i++) {
    temp = i * (i + 1);
    s += temp;
  }
  return s;
}
btn3.addEventListener("click", (event) => {
  event.preventDefault();
  var input = parseInt(document.getElementById("b3input").value);
  if (input == 0 || input == "" || isNaN(input)) {
    alert("Vui lòng nhập lại");
  } else {
    var result = calc3(input);
    document.getElementById("calcResult").innerHTML = result;
  }
});
// --------------------- function b3-------------------------

// --------------------- function b4-------------------------
function prime(n) {
  if (n < 2) {
    return false;
  } else {
    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
  }
  return true;
}
btn4.addEventListener("click", (event) => {
  event.preventDefault();
  var input = parseInt(document.getElementById("input4").value);
  if (input == 0 || input == "" || isNaN(input)) {
    alert("Vui lòng nhập lại");
  } else {
    result = prime(input);
    if (result) {
      document.getElementById(
        "ntResult"
      ).innerHTML = `${input} là số nguyên tố`;
    } else {
      document.getElementById(
        "ntResult"
      ).innerHTML = `${input} không là số nguyên tố`;
    }
  }
});

// --------------------- function b4-------------------------

// --------------------- function b5-------------------------
function triangle(n) {
  var result = "";
  var count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      count++;
      result += count + " ";
    }
    result += "<br>";
  }
  return result;
}
btn5.addEventListener("click", (event) => {
  event.preventDefault();
  var input = parseInt(document.getElementById("input5").value);
  if (input === " " || input === 0 || isNaN(input)) {
    alert("Vui lòng nhập lại");
  } else {
    var result = triangle(input);
    document.getElementById("resultTriangle").innerHTML = result;
  }
});

// --------------------- function b5-------------------------

// --------------------- function b6-------------------------

function chess() {
  for (let i = 1; i <= 8; i++) {
    const cellContainer = document.createElement("div");
    cellContainer.className = "cellContainer";
    for (let j = 1; j <= 8; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";

      if (i % 2 === 0) {
        if (j % 2 === 0) {
          cell.style.backgroundColor = "black";
        } else {
          cell.style.backgroundColor = "white";
        }
      } else {
        if (j % 2 === 0) {
          cell.style.backgroundColor = "white";
        } else {
          cell.style.backgroundColor = "black";
        }
      }

      cellContainer.append(cell);
    }
    board.append(cellContainer);
  }
}
btn6.addEventListener("click", (event) => {
  event.preventDefault();
  chess();
});

// --------------------- function b6-------------------------

// --------------------- function b7-------------------------
function calcmulti() {
  var row = document.getElementById("row");
  row.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const containerMulti = document.createElement("div");
    containerMulti.className = "containerMulti col-3";
    for (let j = 1; j <= 10; j++) {
      const spanMulti = document.createElement("span");
      spanMulti.className = "spanMulti";
      var result = i * j;
      spanMulti.innerHTML = ` ${i} x ${j} = ${result}  <br>`;
      containerMulti.append(spanMulti);
    }
    row.append(containerMulti);
  }
}
btnMulti.addEventListener("click", (event) => {
  event.preventDefault();
  calcmulti();
});

// --------------------- function b7-------------------------
