import React from "react";

import {NativeRouter as Router, Routes, Route} from "react-router-native";

import {EditCard} from "../editCard";
import {MainPage} from "../main_page";
import {Splashscreen} from "../splashscreen";

export const Application = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="/birds" element={<MainPage />} />
        <Route path="/birds/edit/:id" element={<EditCard />} />
        <Route path="/create" element={<EditCard />} />
      </Routes>
    </Router>
  );
};
