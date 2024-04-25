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
