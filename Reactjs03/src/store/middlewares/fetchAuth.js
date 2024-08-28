const requesLogin = async (data) => {
  const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const fetchAuth = (email, password) => {
  return async (dispatch) => {};
};
