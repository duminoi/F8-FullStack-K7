/*
Request 1 ==> Success
Request 2 ==> Success
Request 3 ==> Failed ==> Refresh Token ==>Request 3
Request 4 ==> Failed ==> Refresh Token ==>Request 4
Request 5 ==> Failed ==> Refresh Token ==>Request 5


*/
let token = "My Token";
let isExpired = false;
let refreshTokenPromise = null;
const requestRefreshToken = (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(url);
      resolve(`New Token: ${Math.random()}`);
    }, 1000);
  });
};

const requestApi = (url) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      //Giả sử khi call API/courses ==> Hết hạn
      if (url === "/courses") {
        isExpired = true;
      }
      if (isExpired) {
        if (!refreshTokenPromise) {
          refreshTokenPromise = requestRefreshToken(url);
        }
        const newToken = await refreshTokenPromise;
        token = newToken;
      }
      console.log(`Call API: ${url}, Token: ${token}`);
    }, 1000);
  });
};
requestApi("/profile");
requestApi("/courses");
requestApi("/posts");
requestApi("/products");
