import LoginForm from "./LoginForm";
import "./App.css";
import Header from "./Header";
import { useState } from "react";

function App() {
  return (
    <>
    <Header/>
    <body>
      <main id='main'>
        <LoginForm />
      </main>
    </body>
    </>
  );
}

export default App;
