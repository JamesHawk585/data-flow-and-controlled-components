import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const passwordString = password;

  //   regex (js Regular Expressions are used to check if a string meets given criteria.)
  const passwordRules = {
    "Long Enough": (passwordString) => passwordString.length >= 8,
    "Has a Number": (passWordContainsNumber) => /\d/.test(passwordString),
    "Special Character(!;.$)": (passwordString) =>
      /[!;.$]/.test(passwordString),
    "Uppercase Letter": (passwordString) =>
      passwordString.toLowerCase() !== passwordString,
  };

  console.log(Object.entries(passwordRules))



//   Ternary syntax: 
// question yes : no
// ? "": ""

  const passwordRulesElements = Object.entries(passwordRules).map(([str, func]) => <li key={str}>{func(password) ? "✅": "❌"}    {str}</li>)

  const handleUserNameSubmit = (e) => {
    setUsername(e.target.value);
    console.log("e.target.value: ", e.target.value);
    console.log("username: ", username);
  };

  const handlePasswordSubmit = (e) => {
    setPassword(e.target.value);
    console.log("password:", password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userdataObject = {
      username,
      password,
    };
    console.log(userdataObject);
  };

  // 2023_08_16_Controlled_Components 40:02

  return (
    <>
      <form onSubmit={(e) => handleLogin(e)} className="loginForm">
        <label id="loginLabel">Login:</label>
        <input
          type="text"
          id="passwordInput"
          placeholder="Username"
          value={username}
          onChange={(e) => handleUserNameSubmit(e)}
        ></input>
        <input
          type="password"
          id="usernameInput"
          placeholder="Password"
          value={password}
          onChange={(e) => handlePasswordSubmit(e)}
        ></input>
        <button id="submitButton">Submit</button>
      </form>
      <section>
        <header>
          <div>
            <ul>{passwordRulesElements}</ul>
          </div>
        </header>
      </section>
    </>
  );
};

export default LoginForm;
