import LoginForm from "./LoginForm";
import "./App.css";
import Header from "./Header";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <LoginForm />
      </main>
    </>
  );
}

export default App;
