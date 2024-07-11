import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import { chairs, sofas, tables } from "./data/furnitures";
import Layouts from "./layouts/Layouts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layouts/>}>
      <Route index element={<App />} />
      <Route path="sofa" element={<ProductsList data={sofas} />} />
      <Route path="chair" element={<ProductsList data={chairs} />} />
      <Route path="table" element={<ProductsList data={tables} />} />
      </Route>
    </Routes>   
  </BrowserRouter>
);
