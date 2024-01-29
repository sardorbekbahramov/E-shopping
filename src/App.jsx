import React from "react";
import Nav from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom"
import Rout from "./components/Home/Rout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Rout/>
      </BrowserRouter>
    </>
  );
}

export default App;
