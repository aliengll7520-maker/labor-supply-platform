import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Header title="Admin Panel" />

      <main className="admin-content">
        {children}
      </main>

      <Footer text="© Labor Supply Platform - Admin" />
    </div>
  );
}

export default AdminLayout;
