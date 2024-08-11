//Chạy theo yêu cầu đề bài
var text = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hello
reiciendis laudantium error veritatis cupiditate sint blanditiis fugit
quidem ratione! `;
var interval;
var startIndex = 0;
function changeColor() {
  var endIndex = text.indexOf(" ", startIndex + 1);
  if (endIndex === -1) {
    endIndex = text.length;
  }

  var currentWord = text.slice(startIndex + 1, endIndex);

  if (startIndex === 0) {
    var output =
      `<span style="color:red">${text.slice(0, endIndex)}</span>` +
      text.slice(endIndex);
  }
  var output =
    text.slice(0, startIndex + 1) +
    `<span style="color:red">${currentWord}</span>` +
    text.slice(endIndex);

  document.body.innerHTML = output;

  startIndex = endIndex;
  if (startIndex === text.length) {
    startIndex = 0;
  }
}
interval = setInterval(changeColor, 500);

//chạy kiểu karaoke
// var str =
//   "Hoc lap trinh tai F8 Hoc lap trinh tai F8 Hoc lap trinh tai F8 Hoc lap trinh tai F8";
// var position = 0;
// function highlightWord() {
//   var index = str.indexOf(" ", position);
//   var output = `<span style="color: red;">${str.slice(0, index) + " "}</span>`;
//   if (index < 0) {
//     output = `<span style="color: red;">${str.slice(index + 1)}</span>`;
//     index = str.length;
//   }
//   var textEnd = str.slice(index + 1);
//   document.body.innerHTML = output + textEnd;
//   position = index + 1;
// }

// setInterval(highlightWord, 1000);
