var input = document.querySelector("input");
const beforeUnloadHandler = (event) => {
  //recommend
  event.preventDefault();
  //Included for legacy support, e.g. Chrome/Edge < 199
  event.returnValue = true;
};

var form = document.querySelector("form");
form.addEventListener("input", function (e) {
  input.addEventListener("input", function (e) {
    //Lấy giá trị cũ
    var defaultValue = e.target.defaultValue;
    var value = e.target.value;
    if (defaultValue !== value) {
      window.addEventListener("beforeunload", beforeUnloadHandler);
    } else {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    }
    console.log("defaultValue:", defaultValue);
    console.log("value", value);
  });
});
