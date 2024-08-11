// //-------------------b1-------------------
const btn1 = document.getElementById("btn1");
var b1 = function (n) {
  // Hàm kiểm tra số nguyên tố
  const isPrime = function (n) {
    if (n < 2) {
      return false;
    } else {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
          return false;
        }
      }
    }
    return true;
  };
  //Hàm kiểm tra số đối xứng

  var reverseNum = function (n) {
    const temp = n.toString().split("").reverse().join("");
    return temp === n.toString();
  };

  var number = n;
  while (number >= n) {
    if (isPrime(number) && reverseNum(number)) {
      return number;
    }
    number++;
  }
};

btn1.addEventListener("click", () => {
  const input1 = parseInt(document.getElementById("input1").value);
  console.log(input1);
  document.getElementById("result1").innerHTML = b1(input1);
});
// console.log(b1(8));

// console.log(reverseNum(8));
// console.log(isPrime(3));
// //-------------------b1-------------------

// //-------------------b2-------------------
var btn2 = document.getElementById("btn2");
// var nums1 = [1, 2, 3];
// var nums2 = [4, 5, 6];
function arr(arr1, arr2) {
  const arr = arr1.concat(arr2);
  arr.sort(function (a, b) {
    if (b > a) {
      return -1;
    }
  });
  const numberIndex = (arr.length - 1) / 2;
  const numberFloor = Math.floor(numberIndex);
  const numberCeil = Math.ceil(numberIndex);
  var number;
  if (numberIndex === numberFloor) {
    number = arr[numberIndex];
  } else number = (arr[numberFloor] + arr[numberCeil]) / 2;
  return number;
}
// console.log(arr(nums1, nums2));

btn2.addEventListener("click", () => {
  var nums1 = document.getElementById("nums1").value.split(",");
  var nums2 = document.getElementById("nums2").value.split(",");
  nums1 = nums1.map(Number);
  nums2 = nums2.map(Number);

  document.getElementById("result2").innerHTML = arr(nums1, nums2);
});

// //-------------------b2-------------------

// //-------------------b3-------------------
var btn3 = document.getElementById("btn3");
var minOutOf = function (arrNum) {
  //tìm max của mảng được nhập vào
  var max = arrNum.reduce(function (prev, current) {
    if (prev < current) {
      return current;
    }
    return prev;
  }, arrNum[0]);

  var number = 1;
  // var check = false;
  var newArr = [];
  while (number <= max) {
    // if (arrNum.includes(number)) {
    //   check = true;
    //   console.log(check);
    // }
    // if (!check) {
    //   newArr.push(number);
    // }
    if (!arrNum.includes(number)) {
      newArr.push(number);
    }
    number++;
  }
  console.log(newArr);
  //tìm min của mảng chứa số ko thuộc mảng ban đầu
  var min = newArr.reduce(function (prev, current) {
    if (prev > current) {
      return current;
    }
    return prev;
  }, newArr[0]);
  return newArr.length > 0 ? min : number;
};

btn3.addEventListener("click", () => {
  var input3 = document.getElementById("input3").value.split(",");
  input3 = input3.map(Number);
  document.getElementById("result3").innerHTML = minOutOf(input3);
});
// //-------------------b3-------------------
