/*
 *  Document    : App.jsx
 *  Author      : Ganapathy
 *  Description : Router page For Common
 */

import { Route, Routes, HashRouter } from "react-router-dom";
// Components
import "./App.css";
import Login from "./login/index";
import HomePage from "./home/index";
import SignUp from "./signup/index";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<HomePage />} path="/home" />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
