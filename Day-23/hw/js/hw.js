//-------------------b1-------------------

var b1 = function (n) {
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

  var reverseNum = function (n) {
    var reverse = function (n) {};
  };
};
