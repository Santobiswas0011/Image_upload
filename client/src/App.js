import React from "react";

import { Box,styled } from "@mui/material";

import { Route, Routes } from "react-router-dom";

// import component
import Header from "./Components/Header";
import Home from "./Components/Home";
import Register from "./Components/Register";

const Component=styled(Box)`
     margin-top:60px;
`

const App = () => {
  return (
    <>
      <Header />
      <Component>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Component>
    </>
  );
};

export default App;
