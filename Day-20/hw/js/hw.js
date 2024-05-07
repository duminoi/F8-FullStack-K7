//Cách 2
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
