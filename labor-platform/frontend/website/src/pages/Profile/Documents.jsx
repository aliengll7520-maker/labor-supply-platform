import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Badge from "../../components/Badge/Badge";
import "./Documents.css";

function Documents() {
  return (
    <MainLayout>

      <div className="documents">

        <h1>Giấy tờ cá nhân</h1>

        <Card>

          <h3>CCCD</h3>

          <Badge
            text="Đã xác thực"
            color="#2e7d32"
          />

          <p>Ảnh mặt trước</p>

          <p>Ảnh mặt sau</p>

          <Button text="CẬP NHẬT GIẤY TỜ" />

        </Card>

      </div>

    </MainLayout>
  );
}

export default Documents;
