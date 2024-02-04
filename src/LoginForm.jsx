import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameSubmit = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  // 2023_08_16_Controlled_Components 40:02

  return (
    <form onSubmit={(e) => handleFormSubmit(e)} id='loginForm'>
      <label id='loginLabel'>Login:</label>
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
  );
};

export default LoginForm;
