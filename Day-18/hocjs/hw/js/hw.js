//-----------------------variable b1------------------------
var btnTaxi = document.getElementById("btnTaxi");
//-----------------------variable b1------------------------
//-----------------------variable b2------------------------
var kwhbtn = document.getElementById("kwhBtn");
//-----------------------variable b2------------------------

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
