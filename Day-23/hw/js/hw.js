//-------------------b1-------------------

var b1 = function (n) {
  //Hàm kiểm tra số nguyên tố
  var isPrime = function (n) {
    if (n < 2) {
      return false;
    } else {
      for (var i = 0; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
          return false;
        }
      }
    }
    return true;
  };
  //Hàm kiểm tra số đối xứng

  var reverseNum = function (n) {
    var reverse = function (n) {
      var string = n.toString();
      var rvNum = string.reverse();
      return rvNum;
    };
    if (n == reverse(n)) {
      return true;
    }
    return false;
  };

  var number = number.reduce(function (prev, current) {}, n);
};
