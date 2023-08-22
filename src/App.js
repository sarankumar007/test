import React, { useState } from "react";
// import io from "socket.io-client";
import { Route, Routes, useNavigate } from "react-router-dom";
import TokenForm from "./TokenForm";
import Callback from "./Callback";
import Dashboard from "./Dashboard";
import IframePage from "./IframePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TokenForm />} />
        <Route path="/auth/twitch/callback" element={<Callback />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/iframe/:id" element={<IframePage />} />
      </Routes>
    </div>
  );
};

export default App;
