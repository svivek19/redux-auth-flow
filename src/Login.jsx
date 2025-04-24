import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./features/auth/authSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleLogin() {
    const result = await dispatch(loginUser(formData));

    if (loginUser.fulfilled.match(result)) {
      navigate("/main");
    } else {
      alert("Login failed: " + result.payload);
    }
  }

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
      />
      <br /> <br />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
      />
      <br /> <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
