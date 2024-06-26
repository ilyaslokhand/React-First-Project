import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [input, Setinput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // to store value in local storage.

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(input).some((value) => value === "");
    if (isEmpty) {
      alert(
        "Please enter all details! Name, Email, and Password are required."
      );
      return;
    }

    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div className="containor-login">
      <div className="details-form">
        <h2>Please Enter the details to Register</h2>

        <div className="user-form">
          <form className="users-details" onSubmit={handleSubmit}>
            <input
              name="name"
              value={input.name}
              onChange={(e) =>
                Setinput({ ...input, [e.target.name]: e.target.value })
              }
              type="text"
              placeholder="please enter your username"
            ></input>
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
            <button type="submit" className="loginbtn">
              Register-Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
