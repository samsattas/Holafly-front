import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { RouterProvider, createHashRouter } from "react-router-dom";
// import Home from "./components/pages/Home.tsx";
// import Login from "./components/pages/Login.tsx";
import App from "./App.tsx";

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <p>login</p>,
//   },
//   {
//     path: "/log",
//     element: <Login />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
