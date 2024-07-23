//submit form ==> Lấy dữ liệu ==> Validate
import { httpClient } from "./client.js";

const apiUrl = `https://api.escuelajs.co/api/v1`;

document.body.addEventListener("submit", async (e) => {
  // Khi bấm đăng nhập
  if (e.target.classList.contains("login-form")) {
    e.preventDefault();
    const form = e.target;
    const { email, password } = Object.fromEntries([...new FormData(e.target)]);
    const data = {};
    const errors = {};
    if (!email) {
      errors.email = "Vui lòng nhập email";
    } else {
      data.email = email;
    }
    if (!password) {
      errors.password = "Vui lòng nhập mật khẩu";
    } else {
      data.password = password;
    }
    const errorElList = form.querySelectorAll(".error");
    errorElList.forEach((errorEl) => {
      errorEl.innerText = "";
    });
    console.log(Object.keys(errors));
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
      setLoadingBtn(form);
      const loginData = await sendRequestLogin(data);
      console.log(loginData);
      removeLoadingBtn(form);
      if (!loginData) {
        showMessage(form, "Email hoặc mật khẩu không chính xác", "danger");
      } else {
        localStorage.setItem("login_token", JSON.stringify(loginData));
        render();
      }
    }
  }
});

const sendRequestLogin = async (loginData) => {
  // try {
  //   const response = await fetch(`${apiUrl}/auth/login`, {
  //     method: `POST`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(loginData),
  //   });
  //   if (!response.ok) {
  //     throw new Error();
  //   }
  //   return response.json();
  // } catch (e) {
  //   return false;
  // }
  const { response, data } = await httpClient.post(`/auth/login`, loginData);
  if (!response.ok) {
    return false;
  }
  return data;
};

const getProfile = async () => {
  try {
    const { access_token: accessToken } = JSON.parse(
      localStorage.getItem(`login_token`)
    );
    // const response = await fetch(`${apiUrl}/auth/profile`, {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // });
    // if (!response.ok) {
    //   throw new Error("Unauthorize");
    // }
    // return response.json();
    httpClient.token = accessToken;
    const { response, data } = await httpClient.get("/auth/profile");
    if (!response.ok) {
      throw new Error("Unauthorize");
    }
    return data;
  } catch (error) {
    return false;
  }
};

const showMessage = (loginForm, msg, type = "success") => {
  const msgEl = loginForm.querySelector(".msg");
  msgEl.innerHTML = `<div class="alert alert-${type} text-center">${msg}</div>`;
};

const setLoadingBtn = (loginForm) => {
  const btn = loginForm.querySelector(".btn");
  btn.innerHTML = `  <span class="spinner-border spinner-border-sm"></span> Loading...`;
  btn.disabled = true;
};

const removeLoadingBtn = (loginForm) => {
  const btn = loginForm.querySelector(".btn");
  btn.innerText = "Đăng nhập";
  btn.disabled = false;
};

const sendRefreshToken = async () => {
  try {
    const { refresh_token: refreshToken } = JSON.parse(
      localStorage.getItem(`login_token`)
    );
    const response = await fetch(`${apiUrl}/auth/refresh-token`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });
    if (!response.ok) {
      throw new Error("Unauthorize");
    }
    return response.json();
  } catch (e) {
    return false;
  }
};

const showProfile = async () => {
  const user = await getProfile();
  console.log(user);
  if (user) {
    const profileNameEl = document.querySelector(".profile-name");
    profileNameEl.innerText = user.name;
  } else {
    //Nếu access_token bị miss
    //Call API Refresh Token
    console.log("vào đây");
    const newToken = await sendRefreshToken();
    if (newToken) {
      localStorage.setItem(`login_token`, JSON.stringify(newToken));
      showProfile();
    } else {
      // nếu refresh_token bị miss
      handleLogout(); //Đăng xuất
    }
  }
};

const handleLogout = () => {
  localStorage.removeItem("login_token");
  render();
};

const render = () => {
  const status = localStorage.getItem(`login_token`) ? true : false; //Trạng thái đăng nhập
  if (status) {
    document.body.innerHTML = `<div class="container">
      <h2>Chào mừng bạn đến với F8</h2>
      <ul class="list-unstyled d-flex gap-2">
        <li>Chào mừng bạn: <span class="profile-name">...</span></li>
        <li><a href="#" onclick="handleLogout()">Đăng xuất</a></li>
      </ul>
    </div>`;
    showProfile();
  } else {
    document.body.innerHTML = `<div class="w-50 mx-auto py-3">
      <h2 class="text-center">Đăng nhập</h2>
      <form class="login-form" action="">
        <div class="msg"></div>
        <div class="mb-3">
          <label for="">Email</label>
          <input
            type="text"
            name="email"
            class="form-control"
            placeholder="Email..."
          />
          <span class="text-danger error error-email"></span>
        </div>
        <div class="mb-3">
          <label for="">Mật khẩu</label>
          <input
            type="password"
            name="password"
            class="form-control"
            placeholder="Mật khẩu..."
          />
          <span class="text-danger error error-password"></span>
        </div>
        <div class="d-grid">
          <button class="btn btn-primary">Đăng nhập</button>
        </div>
      </form>
    </div>`;
  }
};

document.addEventListener("DOMContentLoaded", render);
