import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Login";
import FetchPost from "./FetchPost";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/main"
          element={
            <PrivateRoute>
              <FetchPost />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
