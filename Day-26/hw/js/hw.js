var sumRest = function (...args) {
  var sum = 0;
  for (var key of args) {
    if (key == NaN || key == undefined) {
      console.log("vui lòng nhập lại");
    } else {
      sum += Number(key);
    }
  }
  return sum;
};
console.log("Bài 1");
console.dir(sumRest);
console.log(`output: `, sumRest(1, 2, 3, "4"));
// -----------------------------------------------------------
console.log("Bài 2");
var price = "12000000";
Object.prototype.getCurrency = function (unit) {
  var unitAbs = unit.split("").filter(function (value) {
    return value !== " ";
  });
  var number = Number(this).toLocaleString() + " " + unitAbs;
  return number;
};
console.log("price = `12000000` ");
console.log(`out put:`, price.getCurrency(" đ  "));
// -----------------------------------------------------------

console.log("Bài 3");

Array.prototype.push2 = function (...args) {
  for (let value of args) {
    this[this.length] = value;
  }
  return this;
};

var arr1 = [];
arr1.push2(1, 2);
console.log(arr1.push2);
console.log(arr1);

// -----------------------------------------------------------
console.log("Bài 4");
Array.prototype.filter2 = function (callback) {
  var newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i) === true) {
      newArr[newArr.length] = this[i];
    }
  }
  return newArr;
};
var arr2 = [1, 2, 3, 4, 5, 6];
var newArr = arr2.filter2(function (value) {
  return value % 2 == 0;
});
console.log(newArr);
// -----------------------------------------------------------

console.log("Bài 5");
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

function nestTree(categories, children = 0) {
  var result = "";
  var beginOption = "";
  switch (children) {
    case 1:
      beginOption = "--|";
      break;
    case 2:
      beginOption = "--|--|";
      break;
  }

  categories.forEach(function (category) {
    result += `<option>${beginOption}${category.name}</option>`;
    if (category.children) {
      result += nestTree(category.children, children + 1);
    }
  });

  return result;
}

console.log();
document.write(`<select>
<option>chọn chuyên mục</option>
      ${nestTree(categories, 0)}
</select>`);
