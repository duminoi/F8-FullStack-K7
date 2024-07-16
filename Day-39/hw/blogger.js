// const apiUrl = "https://kqgsvq-8080.csb.app";

// // const getBlogs = async () => {
// //   const response = await fetch(`${apiUrl}/blogs?_start=0&_end=10`);
// //   const blogs = await response.json();
// //   render(blogs);
// //   return blogs;
// // };
// let increase = 10;

// const getBlogScroll = async (param) => {
//   let query = new URLSearchParams(param).toString();
//   query = "_" + query;
//   console.log(query);
//   const response = await fetch(`${apiUrl}/blogs?${query}`);
//   const blogs = await response.json();
//   render(blogs);
//   return blogs;
// };
// getBlogScroll({ start: `0`, _end: `${increase}` });
// const render = (blogs) => {
//   const blogWrapper = document.querySelector(".home-page .blog-wrapper");

//   blogWrapper.innerHTML = `
//         ${blogs
//           .map((blog) => {
//             return `
//           <section class="blog-list">
//           <div class="datetime">
//             <span class="moment">${blog.moment}</span>
//             <div class="time-group">
//               <span class="hours">${blog.time.hours}</span>
//               <span class="mins">${blog.time.mins}</span>
//             </div>
//           </div>
//           <!-- end datetime -->
//           <span class="link _avatar">
//             <a href="" class="wrapper">
//               <span class="avatar">${blog.userName
//                 .split("")
//                 .filter((c, i) => {
//                   return i == 0;
//                 })
//                 .toString()
//                 .toLowerCase()}</span>
//               <span class="name">${blog.userName}</span>
//             </a>
//           </span>
//           <!-- end link avatar -->
//           <h3 class="title">${blog.title}</h3>
//           ${
//             blog.content.toString().includes(`http`)
//               ? `<a href="${blog.content}" class="content">${blog.content}</a>`
//               : `<p class="content">${blog.content}</p>`
//           }
//           <span class="link _content">
//             <a href="" class="tag">view more ${blog.title
//               .replace(/\s+/g, "")
//               .toLowerCase()}...</a>
//           </span>
//           <!-- end linh _content -->
//           <span class="link _name">
//             <a href="" class="tag">${blog.userName
//               .replace(/\s+/g, "")
//               .toLowerCase()}</a>
//           </span>
//           <!-- end link _name -->
//           <span class="name-vertical">@${blog.userName
//             .toString()
//             .toLowerCase()
//             .replace(/\s+/g, "")}</span>
//           <span class="time-reading">Khoảng <span>1 giây</span> đọc</span>
//           <hr style="width: 100%" />
//         </section>
//           `;
//           })
//           .join("")}
//     `;
// };

// const addEventScroll = () => {
//   window.addEventListener("scroll", handleScroll);
// };

// const handleScroll = async () => {
//   if (
//     window.scrollY + window.innerHeight >=
//     document.documentElement.scrollHeight
//   ) {
//     // window.removeEventListener(handleScroll);
//     increase += 5;
//     param = {
//       start: `0`,
//       _end: `${increase}`,
//     };
//     getBlogScroll(param);
//   }
// };

// addEventScroll();

const apiUrl = "https://kqgsvq-8080.csb.app";

const getBlogs = async () => {
  const response = await fetch(`${apiUrl}/blogs?_start=0&_end=10`);
  const blogs = await response.json();
  render(blogs);
  return blogs;
};

const getBlogScroll = async (param) => {
  let query = new URLSearchParams(param).toString();
  query = "_" + query;
  const response = await fetch(`${apiUrl}/blogs?${query}`);
  const blogs = await response.json();
  render(blogs);
  return blogs;
};
const render = (blogs) => {
  const blogWrapper = document.querySelector(".home-page .blog-wrapper");

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

let increase = 10;
const addEventScroll = () => {
  window.addEventListener("scroll", handleScroll);
};

const handleScroll = async () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight * (98 / 100)
  ) {
    const response = await fetch(`${apiUrl}/blogs`);
    const quantity = await response.json();
    if (increase < quantity.length) {
      increase += 3;
      param = {
        start: `0`,
        _end: `${increase}`,
      };
      getBlogScroll(param);
    } else {
      if (increase === quantity.length) {
        window.removeEventListener(handleScroll);
        return false;
      }
    }
  }
};

addEventScroll();
getBlogs();
