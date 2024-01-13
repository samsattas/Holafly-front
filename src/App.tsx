import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/custom-components/Layout";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/holafly-front/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/holafly-front/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
