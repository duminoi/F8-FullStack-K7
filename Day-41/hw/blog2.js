const f8ApiUrl = `https://api-auth-two.vercel.app`;
let increase = 10;

const getBlogs = async (param) => {
  console.log("123123");
  try {
    let query = new URLSearchParams(param).toString();
    query = "_" + query;
    // Đoạn này không nên destruct luon vì trong localstorage không phải lúc nào cũng có token
    const dataToken = JSON.parse(localStorage.getItem("loginBlog_token"));
    if (dataToken) {
      console.log("hello");
      const response = await fetch(`${f8ApiUrl}/blogs?`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${dataToken?.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      // Đoạn này kiểm tra nếu status code trả về là 401 thì gọi refreshToken sau đó gọi lại getBlog
      if (!response.ok) {
        throw new Error();
      }
      const blogs = await response.json();
      console.log(blogs);
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
  console.log(blogs);
  const status = localStorage.getItem("loginBlog_token") ? true : false;
  const blogWrapper = document.querySelector(".home-page .blog-wrapper");
  if (status) {
    console.log(blogWrapper);
    console.log("đã có token");
    blogWrapper.innerHTML = `
      <h2 class="headerTitle"></h2>
        <section class="postBlog">
        <form action="">
          <span class="link _avatar">
            <a href="" class="wrapper">
              <span class="avatar">m</span>
              <span class="name">Minh</span>
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
    <div class="button-group d-flex justify-content-between mx-3">
      <button class="button btn p-3 mx-3 w-50 signIn">Sign in</button>
      <button class="button btn p-3 mx-3 w-50 signUp">Sign up</button>
    </div>
  </form>`;
    const form = document.querySelector(".blog-wrapper form");
    const fieldName = document.querySelector(".mb-3.name");
    handleFormSubmit(form, fieldName);
  }
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
    headerTitle.innerHTML = `Xin chào ${user.data.name}`;
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
    console.log("accessToken bị thay dổi");
    // nếu accessToken bị miss
    const newToken = await sendRefreshToken();
    if (newToken) {
      console.log("vaoday");
      localStorage.setItem("loginBlog_token", JSON.stringify(newToken));
      showProfile();
    } else {
      handleLogout();
    }
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
    const response = await fetch(`${f8ApiUrl}/users/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (e) {
    return false;
  }
};
const addEventNewBlog = async (blogData) => {
  try {
    const { accessToken } = JSON.parse(localStorage.getItem("loginBlog_token"));
    const response = await fetch(`${f8ApiUrl}/blogs`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (e) {
    return false;
  }
};
const handleFormAddBlog = () => {
  const fomAdd = document.querySelector("section.postBlog form");
  console.log(fomAdd);
  fomAdd.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(e.target)]);
    const response = await addEventNewBlog(formData);
    if (response) {
      getBlogs();
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
      const loginData = await sendRequestLogin(data.email, data.password);
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
      const registerData = await sendRequestRegister(data);
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
    const response = await fetch(`${f8ApiUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(registerData),
    });
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (error) {
    return false;
  }
};

const sendRequestLogin = async (email, password) => {
  try {
    const response = await fetch(`${f8ApiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (error) {
    return false;
  }
};

const sendRefreshToken = async () => {
  try {
    const { refreshToken } = JSON.parse(
      localStorage.getItem("loginBlog_token")
    );
    const response = await fetch(`${f8ApiUrl}/refresh-token`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (e) {
    return false;
  }
};
getBlogs({ start: `0`, _end: `${increase}` });
// addEventScroll();
