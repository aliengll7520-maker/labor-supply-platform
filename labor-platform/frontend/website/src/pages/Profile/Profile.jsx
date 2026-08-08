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
          Thông tin của tôi
        </h1>

        <Card>

          <p>
            <strong>Họ và tên:</strong> Nguyễn Văn A
          </p>

          <p>
            <strong>Số điện thoại:</strong> 0900000000
          </p>

          <p>
            <strong>Quê quán:</strong> Hà Nội
          </p>

          <Button text="Cập nhật thông tin" />

        </Card>

      </div>
    </MainLayout>
  );
}

export default Profile;
