import "./App.css";
import React from "react";
import Login from "./page/auth/login";
import ListProduct from "./page/product/listproduct";
import Account from "./page/profile/account";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/listproduct" element={<ListProduct />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}
