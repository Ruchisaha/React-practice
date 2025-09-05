import React from "react";
import { Routes, Route } from "react-router-dom";
import UserShow from "./UserShow";
import Profile from "./Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserShow />} />
      <Route path="/profile" element={<Profile />} />  
    </Routes>
  );
}

export default App;
