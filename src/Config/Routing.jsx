import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";
import User from "../Pages/User";
import LayoutRoute from "./LayoutRoute";
import StopWatch from "../Pages/StopWatch";

// import DefaultUser from '../Pages/DefaultUser';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutRoute />}>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/User" element={<User />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Routing;
