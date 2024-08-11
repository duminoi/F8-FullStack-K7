/* eslint-disable no-unused-vars */
// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
export default function Form() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState({
    email: "",
    password: "",
  });

  const handleValidate = ({ email, password }, e) => {
    const errors = {};
    const data = {};
    if (!email) {
      errors.email = "không được để trống email";
    } else {
      data.email = email;
    }

    if (!password) {
      errors.password = "khong được trống password";
    } else {
      data.password = password;
    }
    setError(errors);
    if (!Object.keys(errors).length) {
      //Không có lỗi
      setUsers([...users, form]);
      setForm({ email: "", password: "" });
    }
  };

  const [users, setUsers] = useState([]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("submit");
    handleValidate(form, e);
    setForm({ email: "", password: "" });
  };
  const handleChangeValue = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  return (
    <div className="w-50 mx-auto py-3">
      <h2 className="text-center">Login</h2>
      <form action="" onSubmit={handleSubmitForm}>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            onChange={handleChangeValue}
            type="email"
            className="form-control"
            name="email"
            placeholder="email"
            value={form.email}
          />
          {errors.email && <span className="text-danger ">{errors.email}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={handleChangeValue}
            className="form-control"
            name="password"
            placeholder="Password..."
            value={form.password}
          />
          {errors.password && (
            <span className="text-danger ">{errors.password}</span>
          )}

          <span className="text-danger "></span>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <hr />
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.email} - {user.password}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
