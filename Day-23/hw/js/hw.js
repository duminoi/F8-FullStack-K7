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
const nums1 = [1, 3, 4];
const nums2 = [2];
function arr(arr1, arr2) {
  const arr = arr1.concat(arr2);
  arr.sort();
  const numberIndex = (arr.length - 1) / 2;
  const numberRound = Math.round(numberIndex);
  const numberFloor = Math.floor(numberIndex);

  console.log(numberIndex);
  console.log(arr[numberIndex]);
  return arr;
}
console.log(arr(nums1, nums2));

// //-------------------b2-------------------
