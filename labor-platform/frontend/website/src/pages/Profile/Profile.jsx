import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import "./Profile.css";

function Profile() {
  return (
    <MainLayout>
      <div className="profile">

        <h1 className="profile-title">
          Hồ sơ cá nhân
        </h1>

        <Card>

          <p><strong>Họ tên:</strong> Nguyễn Văn A</p>

          <p><strong>Số điện thoại:</strong> 0900000000</p>

          <p><strong>Địa chỉ:</strong> Hà Nội</p>

          <p><strong>Trạng thái:</strong> Sẵn sàng làm việc</p>

          <Button text="Cập nhật hồ sơ" />

        </Card>

      </div>
    </MainLayout>
  );
}

export default Profile;
