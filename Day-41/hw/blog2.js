const form = document.querySelector(".blog-wrapper form");
const fieldName = document.querySelector(".mb-3.name");
const apiUrl = "https://kqgsvq-8080.csb.app";
const f8ApiUrl = `https://api-auth-two.vercel.app`;
let increase = 10;

const getBlogs = async (param) => {
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

const addEventScroll = () => {
  window.addEventListener("scroll", handleScroll);
};

const handleScroll = async () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    increase += 5;
    param = {
      start: `0`,
      _end: `${increase}`,
    };
    getBlogs(param);
  }
};

const handleFormSubmit = () => {
  fieldName.innerHTML = "";
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, email, password } = Object.fromEntries([
      ...new FormData(e.target),
    ]);
    const data = {};
    const errors = {};

    if (e.submitter.classList.contains("signIn")) {
      if (fieldName.innerHTML) {
        // về form signIn
        fieldName.innerHTML = "";
      } else {
        // signIn
        fillDataCheck(name, email, password, data, errors, "signIn");
      }
    }
    if (e.submitter.classList.contains("signUp")) {
      if (fieldName.innerHTML == "") {
        // về form signUp
        fieldName.innerHTML = `
      <label for="name">Enter your name</label>
      <input
        type="text"
        name="name"
        class="form-control"
        placeholder="Please enter your name"
      />
      <span class="text-danger fst-italic error error-name"></span>
      `;
      } else {
        // signUp
        fillDataCheck(name, email, password, data, errors, "signUp");
      }
    }
  });
};
const fillDataCheck = async (name, email, password, data, errors, typeBtn) => {
  if (!name) {
    errors.name = "Vui lòng nhập tên";
  } else {
    data.name = name;
  }
  if (!email) {
    errors.email = "Vui lòng nhập email";
  } else {
    data.email = email;
  }
  if (!password) {
    errors.password = "Vui lòng nhập password";
  } else {
    data.password = password;
  }
  console.log(data, errors);
  if (Object.keys(errors).length) {
    // Trường hợp ko có dữ liệu ở form
    Object.keys(errors).forEach((key) => {
      const error = errors[`${key}`];
      const errorEl = form.querySelector(`.error-${key}`);
      if (errorEl) {
        errorEl.innerText = error;
      }
    });
  } else {
    // Trường hợp có dữ liệu ở form
    if (typeBtn == "signUp") {
      console.log(data);
      // Bấm nút signUp
      const registerData = await sendRequestRegister(data);
      console.log(registerData);
      if (!registerData) {
        alert("Chưa đăng ký được tài khoản");
      } else {
        // về form signIn
        fieldName.innerHTML = "";
      }
    } else {
      // Bấm nút signIn
      console.log(data);
    }
  }
};

const sendRequestRegister = async (registerData) => {
  try {
    const response = await fetch(`${f8ApiUrl}/auth/register`, {
      method: "POST",
      body: JSON.stringify(registerData),
    });
    if (!response.ok) {
      throw new Error();
    }
    console.log(response.json());
    return response.json();
  } catch (error) {
    return false;
  }
};

handleFormSubmit();
// getBlogs({ start: `0`, _end: `${increase}` });
// addEventScroll();
