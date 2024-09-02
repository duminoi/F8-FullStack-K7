import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../store/hook";
import { fetchAuth } from "../../store/middlewares/fetchAuth";
export default function Login() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(fetchAuth(form.email, form.password));
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmitForm}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChangeValue}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            onChange={handleChangeValue}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
