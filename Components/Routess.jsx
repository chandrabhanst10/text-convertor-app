import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import TextForm from "./TextForm";

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path={"/"}
          element={<TextForm heading={"Text Convertor"} />}
        />
        <Route exact path={"/about"} element={<About />} />
        <Route />
      </Routes>
    </div>
  );
};

export default Routess;
