import React from "react";
import { Route, Routes } from "react-router-dom";
import BMW from "./components/BMW.js";
import Hyundai from "./components/Hyundai.js";
import Mercedes from "./components/Mercedes.js";
import Chevrolet from "./components/Chevrolet.js";
import Mustang from "./components/Mustang.js";
import Ford from "./components/Ford.js";
import Main from "./components/Main.js";
import MyCards from "./components/MyCards";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<MyCards />} />
        <Route path="hyundai" element={<Hyundai />} />
        <Route path="mercedes" element={<Mercedes />} />
        <Route path="bmw" element={<BMW />} />
        <Route path="ford" element={<Ford />} />
        <Route path="mustang" element={<Mustang />} />
        <Route path="chevrolet" element={<Chevrolet />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
