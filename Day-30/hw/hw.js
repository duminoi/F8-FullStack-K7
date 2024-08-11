const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
var btn = document.querySelector(".btn");
var action = document.querySelector(".action");
var searchBox = document.querySelector(".search-box");

const commands = [
  "google",
  "facebook",
  "youtube",
  "google drive",
  "google maps",
  "bản đồ",
  //   "chỉ đường vinhomes smartcity tây mỗ",
  //   "chỉ đường tới vinhomes smartcity tây mỗ",
  //   "tới vinhomes smartcity tây mỗ",
  //   "đường tới vinhomes smartcity tây mỗ",
];
const grammar = `#JSGF V1.0; grammar commands; public <command> = ${commands.join(
  " | "
)};`;

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "vi-VN, en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 20;

//khi bấm vào nút sẽ thu giọng nói
var result = 0;
btn.addEventListener("click", function () {
  recognition.start();
  console.log("Ready to receive a color command.");
  action.innerHTML = "Hãy nói nội dung bạn muốn";
  action.classList.remove("success");
  if (result) {
    searchBox.removeChild(result);
  }
});
recognition.onresult = (event) => {
  action.classList.add("success");
  action.innerHTML = "Đã nói xong. Hy vọng kết quả như ý bạn";
  for (let i = 0; i < event.results.length; i++) {
    const command = event.results[i][0].transcript.toLowerCase().trim();
    result = document.createElement("div");
    result.classList.add("result");
    searchBox.appendChild(result);
    result.innerHTML = `Đang thực hiện: ${command}`;

    //kiểm tra những từ có trong command hay ko
    if (commands.includes(command)) {
      console.log("đã nhận biết");
      setTimeout(function () {
        result.innerHTML = `Đã thực hiện xong`;
      }, 500);
      setTimeout(function () {
        switch (command) {
          case "google":
            window.open("https://www.google.com/", "_blank");
            break;
          case "facebook":
            window.open("https://www.facebook.com/", "_blank");
            break;
          case "youtube":
            window.open("https://www.youtube.com/", "_blank");
            break;
          case "google drive":
            window.open("https://drive.google.com", "_blank");
            break;
          case "google maps":
            window.open("https://www.google.com/maps", "_blank");
            break;
          case "bản đồ":
            window.open("https://www.google.com/maps", "_blank");
            break;
        }
      }, 1000);
    } else {
      //không có trong command
      //tìm kiếm đường

      var ignoreMap = ["chỉ", "đường", "tới"];
      var ignoreMusic = ["bài", "hát", "nghe"];
      var ignoreVideo = ["video", "xem"];
      //case chứa các từ "chỉ", "đường", "tới"
      if (
        command.split(" ").some(function (cmd) {
          return ignoreMap.includes(cmd);
        })
      ) {
        var newCommand = command
          .split(" ")
          .filter(function (cmd) {
            return !ignoreMap.includes(cmd);
          })
          .join(" ")
          .replaceAll(" ", "+");
        var href = "https://www.google.com/maps/search/";
        href = href + "+" + newCommand;
        setTimeout(function () {
          //hiển thị thông báo trước khi chuyển trang
          result.innerHTML = `Đã thực hiện xong`;
        }, 500);
        setTimeout(function () {
          // chuyển trang
          window.open(href, "_blank");
        }, 1000);
      } else {
        //tìm kiếm bài hát
        if (
          command.split(" ").some(function (cmd) {
            return ignoreMusic.includes(cmd);
          })
        ) {
          var newCommand2 = command
            .split(" ")
            .filter(function (cmd) {
              return !ignoreMusic.includes(cmd);
            })
            .join(" ")
            .replaceAll(" ", `%20`);
          var hrefMusic = "https://zingmp3.vn/tim-kiem/tat-ca?q=";
          hrefMusic = hrefMusic + newCommand2;
          setTimeout(function () {
            //hiển thị thông báo trước khi chuyển trang
            result.innerHTML = `Đã thực hiện xong`;
          }, 500);
          setTimeout(function () {
            // chuyển trang
            window.open(hrefMusic, "_blank");
          }, 1000);
        } else {
          // tìm kiếm video
          if (
            command.split(" ").some(function (cmd) {
              return ignoreVideo.includes(cmd);
            })
          ) {
            var newCommand3 = command
              .split(" ")
              .filter(function (cmd) {
                return !ignoreVideo.includes(cmd);
              })
              .join(" ")
              .replace(" ", "+");
            var hrefVideo = "https://www.youtube.com/results?search_query=";
            hrefVideo = hrefVideo + newCommand3;
            setTimeout(function () {
              //hiển thị thông báo trước khi chuyển trang
              result.innerHTML = `Đã thực hiện xong`;
            }, 500);
            setTimeout(function () {
              // chuyển trang
              window.open(hrefVideo, "_blank");
            }, 1000);
          } else {
            console.log(" ko xác định:", `"${command}"`);
            setTimeout(function () {
              result.innerHTML = `Không thực hiện được yêu cầu`;
            }, 1000);
          }
        }
      }
    }
  }
};

recognition.onspeechend = () => {
  recognition.stop();
};

recognition.onnomatch = () => {
  diagnostic.textContent = "I didn't recognize that.";
};

recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
