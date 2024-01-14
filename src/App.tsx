import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/custom-components/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/Holafly-front/" element={<Layout />}>
        <Route path="" element={<Login />} />
        <Route path="/Holafly-front/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
