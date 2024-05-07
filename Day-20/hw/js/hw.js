//Cách 2
var text = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. A molestiae
reiciendis laudantium error veritatis cupiditate sint blanditiis fugit
quidem ratione! `;
var interval;
var startIndex = 0;
function changeColor() {
  var endIndex = text.indexOf(" ", startIndex + 1);
  if (endIndex === -1) {
    endIndex = text.length;
  }

  var currentWord = text.substring(startIndex + 1, endIndex);
  var output =
    text.substring(0, startIndex + 1) +
    `<span style="color:red">${currentWord}</span>` +
    text.substring(endIndex);

  document.body.innerHTML = output;

  startIndex = endIndex;
  if (startIndex === text.length) {
    startIndex = 0;
  }
}
interval = setInterval(changeColor, 500);
