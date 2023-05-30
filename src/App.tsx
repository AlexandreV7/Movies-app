import React from "react";
import "./App.css";
import { Header } from "./shared/Header";
import { HomePage } from "./pages/homePage/HomePage";
import { Details } from "./pages/homePage/components/Details";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (

    <Router>
      <div>
        <Header />


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
