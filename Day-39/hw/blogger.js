const apiUrl = "http://localhost:3000";

const getBlogs = async (param) => {
  let query = new URLSearchParams(param).toString();
  query = "_" + query;
  //   console.log(query);
  const respone = await fetch(`${apiUrl}/blogs?${query}`);
  //   console.log(respone);
  const blogs = await respone.json();
  render(blogs);
  return blogs;
};

const render = (blogs) => {
  const blogWrapper = document.querySelector(".home-page .blog-wrapper");
  console.log(blogs[0].userName.toString().toLowerCase());
  blogWrapper.innerHTML = `
        ${blogs
          .map((blog) => {
            return `
          <section class="blog-list">
          <div class="datetime">
            <span class="moment">${blog.moment}</span>
            <div class="time-group">
              <span class="hours">${blog.time.hours}</span>
              <span class="mins">${blog.time.mins}</span>
            </div>
          </div>
          <!-- end datetime -->
          <span class="link _avatar">
            <a href="" class="wrapper">
              <span class="avatar">${blog.userName
                .split("")
                .filter((c, i) => {
                  return i == 0;
                })
                .toString()
                .toLowerCase()}</span>
              <span class="name">${blog.userName}</span>
            </a>
          </span>
          <!-- end link avatar -->
          <h3 class="title">${blog.title}</h3>
          ${
            blog.content.toString().includes(`http`)
              ? `<a href="${blog.content}" class="content">${blog.content}</a>`
              : `<p class="content">${blog.content}</p>`
          }
          <span class="link _content">
            <a href="" class="tag">view more ${blog.title
              .replace(/\s+/g, "")
              .toLowerCase()}...</a>
          </span>
          <!-- end linh _content -->
          <span class="link _name">
            <a href="" class="tag">${blog.userName
              .replace(/\s+/g, "")
              .toLowerCase()}</a>
          </span>
          <!-- end link _name -->
          <span class="name-vertical">@${blog.userName
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "")}</span>
          <span class="time-reading">Khoảng <span>1 giây</span> đọc</span>
          <hr style="width: 100%" />
        </section>
          `;
          })
          .join("")}
    `;
};

const addEventScroll = () => {
  let increase = 10;
  let param = {
    start: `0`,
    _end: `${increase}`,
  };
  getBlogs(param);
  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight * (98 / 100)
    ) {
      if (increase < 50) {
        increase += 3;
        // console.log(increase);
      }
      param = {
        start: `0`,
        _end: `${increase}`,
      };
      getBlogs(param);
    }
  });
};

addEventScroll();
