let result;
const pattern =
  /(^(https)*(:\/\/)*([a-zA-Z0-9]|[a-zA-Z0-9_-]+[a-zA-z0-9])\.([a-zA-Z0-9_-]+[a-zA-z0-9]\.)*[a-zA-Z]{2,}\/*(watch\?v=(.+)|\?id.*)*)/;

const str =
  "https://www.youtube.com/watch?v=IA5v8pHiuRs&list=RDIA5v8pHiuRs&start_radio=1";

if (str.includes("youtube")) {
  result = str.replace(
    pattern,
    `<iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/$7?si="
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>`
  );
  console.log(result);
} else {
  result = str.replace(pattern, '<a href="$1">$1</a>');
}
document.body.innerHTML = result;
