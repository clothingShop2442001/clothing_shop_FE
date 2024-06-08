import "./App.css";
import React from "react";
import Login from "./page/auth/login";
import ListProduct from "./page/product/listproduct";
import Account from "./page/profile/account";
import ManageOder from "./page/admin/manageoder";
import ManageProduct from "./page/admin/manageproduct";
import ManageUser from "./page/admin/manageuser";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/listproduct" element={<ListProduct />} />
      <Route path="/account" element={<Account />} />
      <Route path="/manageoder" element={<ManageOder />} />
      <Route path="/manageproduct" element={<ManageProduct />} />
      <Route path="/manageuser" element={<ManageUser />} />
    </Routes>
  );
}
