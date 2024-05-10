//Cách 2
var text = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. A hello
reiciendis laudantium error veritatis cupiditate sint blanditiis fugit
quidem ratione! `;
// var interval;
// var startIndex = 0;
// function changeColor() {
//   var endIndex = text.indexOf(" ", startIndex + 1);
//   if (endIndex === -1) {
//     endIndex = text.length;
//   }

//   var currentWord = text.slice(startIndex + 1, endIndex);

//   if (startIndex === 0) {
//     var output =
//       `<span style="color:red">${text.slice(0, endIndex)}</span>` +
//       text.slice(endIndex);
//   }
//   var output =
//     text.slice(0, startIndex + 1) +
//     `<span style="color:red">${currentWord}</span>` +
//     text.slice(endIndex);

//   document.body.innerHTML = output;

//   startIndex = endIndex;
//   if (startIndex === text.length) {
//     startIndex = 0;
//   }
// }
// interval = setInterval(changeColor, 500);

var interval;
var index = 0;
var output = "";
var position = 0;
function changeColor() {
  index = text.slice(" ", position);
  output = `<span> ${text.slice(0, position + 1)}</span>`;
  position = index + 1;
  text = text.slice(index + 1);
  // index = text.indexOf(" ", 0);

  if (index === -1) {
    index = 0;
  }
  output += text;
  document.body.innerHTML = output;
}

interval = setInterval(changeColor, 500);
