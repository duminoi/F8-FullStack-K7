const arr = [
  { id: 1, name: "Chuyên mục 1", parent: 0 },
  { id: 2, name: "Chuyên mục 2", parent: 0 },
  { id: 3, name: "Chuyên mục 3", parent: 0 },
  { id: 4, name: "Chuyên mục 2.1", parent: 2 },
  { id: 5, name: "Chuyên mục 2.2", parent: 2 },
  { id: 6, name: "Chuyên mục 2.3", parent: 2 },
  { id: 7, name: "Chuyên mục 3.1", parent: 3 },
  { id: 8, name: "Chuyên mục 3.2", parent: 3 },
  { id: 9, name: "Chuyên mục 3.3", parent: 3 },
  { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
  { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];

function buildTree(data, parentId) {
  const result = [];
  for (var item of data) {
    if (item.parent === parentId) {
      //   console.log(`id: ${item.id}, parent: ${item.parent}`);
      const node = {
        id: item.id,
        name: item.name,
        children: buildTree(data, item.id),
      };
      //   console.log(node);
      result.push(node);
    }
  }
  return result;
}
console.log(`Bai 3`);
console.log(`mang ban dau:`, arr);
console.log(`Mảng sau khi biến đổi: `, buildTree(arr, 0));

console.log("Bài 2");
var arr2 = [8, 3, 2, 1, 9, 4, 5, 6];

Array.prototype.reduce2 = function (callback, init) {
  if (typeof callback === "function") {
    var preValue = init;
    var starIndex = 0;
    if (!init) {
      preValue = this[0];
      starIndex = 1;
    }
    for (let i = starIndex; i < this.length; i++) {
      preValue = callback(preValue, this[i], this);
    }
  }
  return preValue;
};

var newArr2 = arr2.reduce2(function (prev, current, index) {
  if (prev < current) {
    return prev;
  }
  return current;
}, arr2[0]);
var newArr1 = arr2.reduce(function (prev, current, index) {
  if (prev < current) {
    console.log(`prev(${prev}) < current(${current})`);
    return prev;
  }
  return current;
}, arr2[0]);
console.log(`cho hàm arr2:`, arr2);
console.log(`tìm min của arr2 bằng reduce():`, newArr1);
console.log(`tìm min của arr2 bằng reduce2():`, newArr2);
