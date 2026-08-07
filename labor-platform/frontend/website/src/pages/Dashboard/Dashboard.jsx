import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import "./Dashboard.css";

function Dashboard() {
  return (
    <MainLayout>
      <h1>Dashboard</h1>

      <Card>
        <h2>Xin chào!</h2>

        <p>
          Chào mừng bạn đến với nền tảng điều phối cung ứng lao động.
        </p>

        <div style={{ marginTop: "20px" }}>
          <Button text="Tìm việc ngay" />
        </div>
      </Card>
    </MainLayout>
  );
}

export default Dashboard;
