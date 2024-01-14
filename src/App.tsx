import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/custom-components/Layout";
import Home from "./components/pages/Home";

function App() {
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
