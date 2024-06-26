import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, Setinput] = useState({
    email: "",
    password: "",
  });

  const handlelogin = (e) => {
    e.preventDefault();

    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      navigate("/home");
    } else {
      alert("wrong email or password");
    }
  };

  return (
    <div className="containor-login">
      <div className="details-form">
        <h2>Please Enter the details to login</h2>

        <div className="user-form">
          <form className="users-details" onSubmit={handlelogin}>
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                Setinput({ ...input, [e.target.name]: e.target.value })
              }
              type="text"
              placeholder="please enter your email"
            ></input>
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                Setinput({ ...input, [e.target.name]: e.target.value })
              }
              type="password"
              placeholder="Please enter your password"
            />
            <button className="loginbtn">Login-Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
