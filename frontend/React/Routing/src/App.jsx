import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./Landing";
import React from 'react'

// lazy loading in React
const Dashboard = React.lazy(() => import("./Dashboard"));

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />{" "}
        {/* this is a component  that will navigate between pages it should be inside  the browser router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
}

function Navigation() {
  const navigate = useNavigate(); // navigation using useNavigate hook
  return (
    <div>
      <div style={{ border: " 2px solid black" }}>
        <button
          onClick={() => {
            // window.location.href ="/" ; // wrong way because it allow rendring agian

            // right way of navigation
            navigate("/");
          }}
        >
          Home{" "}
        </button>

        <button
          onClick={() => {
            // window.location.href = "/landing" // wrong way because it allow rendring agian

            // right way of navigation
            navigate("/landing");
          }}
        >
          Landing
        </button>

        <button
          onClick={() => {
            // window.location.href ="/dashboard" // wrong way because it allow rendring agian

            // right way of navigation
            navigate("/dashboard");
          }}
        >
          Dashboard{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
