const regexUrl = (str) => {
  let result;
  const pattern =
    /((https)*(:\/\/)*([a-zA-Z0-9]|[a-zA-Z0-9_-]+[a-zA-z0-9])\.([a-zA-Z0-9_-]+[a-zA-z0-9]\.)*[a-zA-Z]{2,}\/*(r.+|watch\?v=(.+)|\?id.*|.)*)/gm;
  const phoneRegex = /((0|\+84)\d{9})/;
  const emailRegex =
    /([a-zA-Z0-9_.]{2,}[a-zA-Z0-9]@[a-z]*[a-z]\.[a-zA-Z]{2,})/g;
  if (str.includes("youtube")) {
    result = str.replace(
      pattern,
      `<iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/$7?si"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>`
    );
    console.log(str.match(pattern));
  } else {
    result = str.replace(
      emailRegex,
      '<a href="mailto:$1" target="_blank">$1</a>'
    );
    console.log(
      str.match(emailRegex, '<a href="mailto:$1" target="_blank">$1</a>')
    );
    result = result.replace(phoneRegex, '<a href="tel:$1">$1</a>');
    result = result.replace(pattern, '<a href="$1">$1</a>');
  }
  console.log(result);
  return result;
};
document.body.innerHTML = regexUrl("dmin@gamil.com hello@gamil.com");
