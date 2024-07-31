import { config } from "./config.js";
export const httpClient = {
  serverApi: config.SERVER_API ?? null,
  token: null,
  refreshTokenPromise: null,
  send: async function (path, method = "GET", body = null, headers = {}) {
    try {
      if (!this.serverApi) {
        throw new Error("Vui lòng cập nhật serverApi");
      }
      const url = this.serverApi + path;
      headers["Content-Type"] = "application/json";
      if (this.token) {
        headers["Authorization"] = `Bearer ${this.token}`;
      }
      const options = {
        method,
        headers,
      };
      if (body) {
        options.body = JSON.stringify(body);
      }
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Unauthorize");
      }
      const data = await response.json();
      return { response, data };
    } catch (e) {
      //Gọi API để cấp lại accessToken mới (Truyền lên refreshToken)
      //Kiểm tra Response của api RefreshToken có hợp lệ không
      // - Không hợp lệ --> Failed
      // - Hợp lệ --> Lưu token mới vào Storage --> Gọi lại request bị Failed (Gọi lại hàm send)
      //Lưu ý: Xử lý trường hợp nhiều request chạy đồng thời (Đã học ở buổi trước)
      if (this.token) {
        if (!this.refreshTokenPromise) {
          this.refreshTokenPromise = this.getNewAccessToken();
        }
        const newToken = await this.refreshTokenPromise;

        if (!newToken) {
          return false;
        }
        //Thành công --> Lưu vào storage
        console.log("vao day");
        const setToken = JSON.parse(localStorage.getItem("loginBlog_token"));
        if (setToken) {
          setToken.accessToken = newToken.data.token.accessToken;
          setToken.refreshToken = newToken.data.token.refreshToken;
        }
        localStorage.setItem("loginBlog_token", JSON.stringify(setToken));
        this.token = newToken.data.token.accessToken;
        return this.send(path, method, body, headers);
      }
    }
  },
  getNewAccessToken: async function () {
    try {
      const { refreshToken } = JSON.parse(
        localStorage.getItem("loginBlog_token")
      );
      const response = await fetch(`${this.serverApi}/auth/refresh-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      });
      if (!response.ok) {
        throw new Error("RefreshToken không hợp lệ");
      }
      return response.json();
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  get: function (url, headers = {}) {
    return this.send(url, "GET", null, headers);
  },
  post: function (url, body, headers = {}) {
    return this.send(url, "POST", body, headers);
  },
  put: function (url, body, headers = {}) {
    return this.send(url, "PUT", body, headers);
  },
  patch: function (url, body, headers = {}) {
    return this.send(url, "PATCH", body, headers);
  },
  delete: function (url, headers = {}) {
    return this.send(url, "DELETE", null, headers);
  },
};

/*
const client = httpClient();
client.get('/users')
*/
