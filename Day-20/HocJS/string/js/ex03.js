var content = `<h1>Học lập trình không khó.Học lập trình không khó</h1>`;
var keyword = "trình";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var output = "";
while (position !== -1) {
  output +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)} </span>`;
  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}
//content = output + content
output += content;
document.body.innerHTML = output;
