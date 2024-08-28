export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const data = { email: email, password: password };
  };
  return (
    <div>
      <h1>Đăng nhập</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        action=""
      >
        <div>
          <input type="email" name="email" placeholder="Nhập email" />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button>login</button>
      </form>
    </div>
  );
}
