import { httpClient } from "./client.js";
const f8ApiUrl = "https://api-auth-two.vercel.app";
let increase = 10;
const getBlogs = async (param) => {
  try {
    let query = new URLSearchParams(param).toString();
    query = "_" + query;
    // Đoạn này không nên destruct luon vì trong localstorage không phải lúc nào cũng có token
    const dataToken = JSON.parse(localStorage.getItem("loginBlog_token"));
    if (dataToken) {
      httpClient.token = dataToken?.accessToken;
      const { response, data: blogs } = await httpClient.get("/blogs");
      if (!response.ok) {
        throw new Error();
      }
      render(blogs.data);
      return blogs;
    } else {
      // Redirect ve login
      render();
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

const render = (blogs) => {
  const status = localStorage.getItem("loginBlog_token") ? true : false;
  const blogWrapper = document.querySelector(".home-page .blog-wrapper");
  if (status) {
    console.log("đã có token");
    blogWrapper.innerHTML = `
      <h2 class="headerTitle"></h2>
        <section class="postBlog">
        <form action="">
          <span class="link _avatar">
            <a href="" class="wrapper">
              <span class="avatar">m</span>
              <span class="name">undefined</span>
            </a>
          </span>
          <div class="title-wrapper w-50">
            <label for="title">Enter Your title</label>
            <input
              type="text"
              placeholder="Please enter your title"
              class="form-control"
              name="title"
            />
          </div>
          <span class = "fst-italic text-danger error error-title"></span>
          <div class="content-wrapper w-50">
            <label for="content">Enter Your content</label>
            <textarea
              name="content"
              id="title"
              cols="30"
              rows="10"
              class="form-control"
              placeholder="content here..."
            ></textarea>
          </div>
          <div class = "fst-italic text-danger w-100 error error-content"></div>
          <div class = "datePicker">
            <input type="datetime-local" name="date" class ="form-control w-50"/>
          </div>
          <div class = "fst-italic text-danger w-100 error error-date"></div>
          <button class="postBtn btn w-50">Write new</button>
        </form>
        </section>
        <button class="logOut btn ">Log out</button>
        ${blogs
          .map(({ title, content, userId }) => {
            return `
            <section class="blog-list">
              <div class="datetime">
                <span class="moment">5 giờ trước</span>
                <div class="time-group">
                  <span class="hours">10h sáng</span>
                  <span class="mins">47 phút</span>
                </div>
              </div>
       
              <span class="link _avatar">
                <a href="" class="wrapper">
                  <span class="avatar">${userId.name
                    .split("")
                    .filter((c, index) => {
                      return index == 0;
                    })
                    .join("")}</span>
                  <span class="name">${userId.name}</span>
                </a>
              </span>
        
              <h3 class="title">${title}</h3>
              <p class="content">${content}</p>
              <span class="link _content">
                <a href="" class="tag">view more test2...</a>
              </span>
  
              <span class="link _name">
                <a href="" class="tag">Minh</a>
              </span>
      
              <span class="name-vertical">@minh</span>
              <span class="time-reading">Khoảng <span>1 giây</span> đọc</span>
              <hr style="width: 100%" />
            </section> 
          `;
          })
          .join("")}
    `;
    handleFormAddBlog(blogs);
    showProfile();
  } else {
    blogWrapper.innerHTML = ` 
    <form action="" class="w-50 mx-auto py-3">
    <div class="mb-3 name"></div>
    <div class="mb-3">
      <label for="email">Enter your email</label>
      <input
        type="email"
        name="email"
        class="form-control"
        placeholder="Please enter your email"
      />
      <span class="text-danger fst-italic error error-email"></span>
    </div>
    <div class="mb-3">
      <label for="password">Enter your password</label>
      <input
        type="password"
        name="password"
        class="form-control"
        placeholder="Please enter your password"
      />
      <span class="text-danger fst-italic error error-password"></span>
    </div>
    <div class="d-flex align-items-center loading">
     </div>
    <div class="button-group d-flex justify-content-between mx-3 ">
      <button class="button btn p-3 mx-3 w-50 signIn">Sign in</button>
      <button class="button btn p-3 mx-3 w-50 signUp">Sign up</button>
    </div>
  </form>`;
    const form = document.querySelector(".blog-wrapper form");
    const fieldName = document.querySelector(".mb-3.name");
    handleFormSubmit(form, fieldName);
  }
};

const addLoading = (form) => {
  const loading = form.querySelector(".loading");
  loading.innerHTML = `
      <strong>Loading...</strong>
      <div class="spinner-border text-success ms-auto" role="status" aria-hidden="true"></div>`;
};
const removeLoading = (form) => {
  const loading = form.querySelector(".loading");
  loading.innerHTML = ``;
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

const showProfile = async () => {
  const user = await getProfile();
  if (user) {
    console.log(user);
    const headerTitle = document.querySelector(".headerTitle");
    const avatar = document.querySelector("._avatar span.avatar");
    const name = document.querySelector("._avatar span.name");
    const logBtn = document.querySelector(".logOut");
    headerTitle.innerHTML = `Chào mừng ${user.data.name}, ngày hôm nay của bạn thế nào ^^`;
    avatar.innerHTML = `${user.data.name
      .split("")
      .filter((c, i) => {
        return i == 0;
      })
      .toString()
      .toLowerCase()}`;
    name.innerHTML = `${user.data.name}`;
    logBtn.addEventListener("click", handleLogout);
    console.log("vào đây");
  } else {
    handleLogout();
  }
};
const handleLogout = () => {
  localStorage.removeItem("loginBlog_token");
  render();
  console.log("đã xóa token");
};
const getProfile = async () => {
  try {
    const { accessToken } = JSON.parse(localStorage.getItem("loginBlog_token"));
    console.log(accessToken);
    httpClient.token = accessToken;
    const { response, data } = await httpClient.get(`/users/profile`);
    if (!response.ok) {
      throw new Error();
    }
    return data;
  } catch (e) {
    console.log(e);
    return false;
  }
};
const addEventNewBlog = async (title, content) => {
  try {
    const { accessToken } = JSON.parse(localStorage.getItem("loginBlog_token"));
    httpClient.token = accessToken;
    const { response, data } = await httpClient.post("/blogs", {
      title,
      content,
    });
    if (!response.ok) {
      throw new Error();
    }
    return data;
  } catch (e) {
    console.log(e);
    return false;
  }
};
const handleFormAddBlog = () => {
  const fomAdd = document.querySelector("section.postBlog form");
  const span = document.querySelector("span");
  fomAdd.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { title, content, date } = Object.fromEntries([
      ...new FormData(e.target),
    ]);
    const data = {};
    const errors = {};
    if (!title) {
      errors.title = "Vui lòng nhập chủ đề";
    } else {
      data.title = title;
      delete errors.title;
    }
    if (!content) {
      errors.content = "Vui lòng nhập nội dung";
    } else {
      data.content = content;
      delete errors.content;
    }
    if (!date) {
      errors.date = "Vui lòng chọn thời gian";
    } else {
      data.date = date;
      delete errors.date;
    }
    if (Object.keys(errors).length) {
      console.log(errors);
      Object.keys(errors).forEach((key) => {
        console.log(key);
        const error = errors[`${key}`];
        console.log(error);
        const spanEl = document.querySelector(`.error-${key}`);
        spanEl.innerHTML = error;
      });
    } else {
      const response = await addEventNewBlog(title, content);
      if (response) {
        getBlogs();
      }
    }
  });
};
const handleFormSubmit = (form, fieldName) => {
  fieldName.innerHTML = "";
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let { name, email, password } = Object.fromEntries([
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
        name = "filled";
        fillDataCheck(
          name,
          email,
          password,
          data,
          errors,
          "signIn",
          null,
          form
        );
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
        fillDataCheck(
          name,
          email,
          password,
          data,
          errors,
          "signUp",
          fieldName,
          form
        );
      }
    }
  });
};
const fillDataCheck = async (
  name,
  email,
  password,
  data,
  errors,
  typeBtn,
  fieldName,
  form
) => {
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
  console.log(Object.keys(errors).length);
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
    if (typeBtn == "signIn") {
      // Bấm nút signIn
      console.log(data);
      addLoading(form);
      const loginData = await sendRequestLogin(data.email, data.password);
      removeLoading(form);
      if (!loginData) {
        alert("Đăng nhập thất bại");
      } else {
        const dataToken = loginData.data;
        localStorage.setItem("loginBlog_token", JSON.stringify(dataToken));
        getBlogs({ start: `0`, _end: `${increase}` });
      }
    }
    if (typeBtn == "signUp") {
      // Bấm nút signUp
      addLoading(form);
      const registerData = await sendRequestRegister(data);
      removeLoading(form);
      console.log(registerData);
      if (!registerData) {
        alert("Chưa đăng ký được tài khoản");
      } else {
        // về form signIn
        fieldName.innerHTML = "";
      }
    }
  }
};

const sendRequestRegister = async (registerData) => {
  try {
    const { response, data } = await httpClient.post(
      `/auth/register`,
      registerData
    );
    if (!response.ok) {
      throw new Error();
    }
    return data;
  } catch (e) {
    return false;
  }
};

const sendRequestLogin = async (email, password) => {
  try {
    const { response, data } = await httpClient.post(`/auth/login`, {
      email,
      password,
    });
    if (!response.ok) {
      throw new Error();
    }
    return data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

getBlogs({ start: `0`, _end: `${increase}` });
// addEventScroll();
