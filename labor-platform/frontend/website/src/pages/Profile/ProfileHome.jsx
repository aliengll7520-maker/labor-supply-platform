import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./ProfileHome.css";

function ProfileHome() {
  return (
    <MainLayout>
      <div className="profile-home">

        <h1>Hồ sơ người lao động</h1>

        <Card>

          <h2>Nguyễn Văn A</h2>

          <Badge
            text="Sẵn sàng làm việc"
            color="#2e7d32"
          />

          <p><strong>Mã hồ sơ:</strong> HS000001</p>

          <p><strong>Điện thoại:</strong> 0900000000</p>

          <p><strong>Khu vực:</strong> Bắc Ninh</p>

          <p><strong>Điểm minh bạch:</strong> 95/100</p>

          <Button text="CẬP NHẬT HỒ SƠ" />

        </Card>

      </div>
    </MainLayout>
  );
}

export default ProfileHome;
