//---------------------------bai 1--------------------------
var btn1 = document.getElementById("btn1");

function getfibo(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return getfibo(n - 1) + getfibo(n - 2);
  }
}
btn1.addEventListener("click", (event) => {
  event.preventDefault();
  var input1 = parseInt(document.getElementById("input1").value);
  var result = "";
  for (i = 0; i <= input1; i++) {
    if (i < input1) {
      result += getfibo(i) + ", ";
    } else {
      result += getfibo(i);
    }
  }
  document.getElementById("result1").innerHTML = result;
});
//---------------------------bai 1--------------------------

//---------------------------bai 2--------------------------
var btn2 = document.getElementById("btn2");
function reverseStr(str) {
  var strToarr = str.split("");
  var arrReverse = strToarr.reverse();
  var arrTostr = arrReverse.join("");
  return arrTostr;
}
btn2.addEventListener("click", (event) => {
  event.preventDefault();
  var input2 = document.getElementById("input2").value;
  document.getElementById("result2").innerHTML = reverseStr(input2);
});
//---------------------------bai 2--------------------------

//---------------------------bai 3--------------------------
var btn3 = document.getElementById("btn3");
function numTostr(n) {
  var string = n.toString();
  var split = string.split("");
  var string2 = "";
  var temp = "";
  for (let i = 0; i < split.length; i++) {
    switch (split[i]) {
      case "0":
        temp = "không";
        if (split.length == 2 && i == 1) {
          temp = "";
        }
        break;
      case "1":
        temp = "một";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp = " mười";
          }
        }

        break;
      case "2":
        temp = "hai";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "3":
        temp = "ba";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "4":
        temp = "bốn";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "5":
        temp = "năm";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "6":
        temp = "sáu";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "7":
        temp = "bảy";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "8":
        temp = "tám";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
      case "9":
        temp = "chín";
        if (split.length == 4) {
          if (i == 0) {
            temp += " ngàn";
          } else if (i == 1) {
            temp += " trăm";
          }
        } else if (split.length == 3) {
          if (i == 0) {
            temp += " trăm";
          }
        } else if (split.length == 2) {
          if (i == 0) {
            temp += " mươi";
          }
        }

        break;
    }
    string2 += temp + " ";
  }
  return string2;
}
btn3.addEventListener("click", (event) => {
  event.preventDefault();
  var input3 = parseInt(document.getElementById("input3").value);
  if (input3 < 0 || input3 > 9999) {
    alert("Vui lòng nhập trong khoảng từ 0 --> 9999 !");
  } else {
    document.getElementById("result3").innerHTML = numTostr(input3);
  }
});
//---------------------------bai 3--------------------------
