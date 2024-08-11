//-------------- b1------------------
var btn1 = document.getElementById("btn1");
function maxNum() {
  var arr = [2, 3, 5, 7, 4, 6, 1];
  var max = arr[0];
  var maxIndex;
  for (var index in arr) {
    if (max < arr[index]) {
      max = arr[index];
      maxIndex = index;
    }
  }
  return [max, maxIndex];
}

function minNum() {
  var arr = [2, 3, 5, 7, 4, 6, 1];
  var min = arr[0];
  var minIndex;
  for (var index in arr) {
    if (min > arr[index]) {
      min = arr[index];
      minIndex = index;
    }
  }
  return [min, minIndex];
}

btn1.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("resultMax").innerHTML = maxNum()[0];
  document.getElementById("resultIndexMax").innerHTML = maxNum()[1];
  document.getElementById("resultMin").innerHTML = minNum()[0];
  document.getElementById("resultIndexMin").innerHTML = minNum()[1];
});

//-------------- b1------------------

//-------------- b2------------------
var btn2 = document.getElementById("btn2");

function totalPrime() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function isPrime(n) {
    if (n < 2) {
      return false;
    } else if (n >= 2) {
      for (let i = 2; i < n; i++) {
        if (n % i == 0) {
          return false;
        }
      }
    }
    return true;
  }
  var total = 0;
  var count = 0;
  var check = false;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      total += arr[i];
      count++;
      check = true;
    }
  }
  return !check ? "Không có số nguyên tố" : total / count;
}
// console.log(totalPrime());

btn2.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("totalPrime").innerHTML = totalPrime();
});
//-------------- b2------------------

//-------------- b3------------------
var btn3 = document.getElementById("btn3");

function doubleFilter() {
  var arr = [1, 2, 3, 3, 4, 5, 6, 7, 9, 8, 9, 9, 10];
  var newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

// console.log(doubleFilter());
btn3.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("resultArr3").innerHTML = `[${doubleFilter()}]`;
});
//-------------- b3------------------

//-------------- b4------------------
var btn4 = document.getElementById("btn4");

function sort() {
  var numbers = [5, 1, 9, 8, 10];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[i]) {
        var tmp = numbers[j];
        numbers[j] = numbers[i];
        numbers[i] = tmp;
      }
    }
  }
  return numbers;
}

function addArr(n) {
  var arr = sort();
  var newArr = [n];
  for (let i = 0; i < arr.length; i++) {
    newArr[newArr.length] = arr[i];
  }
  // console.log(newArr);

  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[j] < newArr[i]) {
        var tmp = newArr[j];
        newArr[j] = newArr[i];
        newArr[i] = tmp;
      }
    }
  }
  return newArr;
}
// console.log(addArr());
btn4.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("sortArr").innerHTML = `[${sort()}]`;
  var input4 = document.getElementById("add").value;

  document.getElementById("addArr").innerHTML = `[${addArr(input4)}]`;
});
//test
//-------------- b4------------------
