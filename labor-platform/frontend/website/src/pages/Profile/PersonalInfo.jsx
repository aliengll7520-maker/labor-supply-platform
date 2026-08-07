import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import "./PersonalInfo.css";

function PersonalInfo() {

  const gender = [
    { value: "", label: "Chọn giới tính" },
    { value: "male", label: "Nam" },
    { value: "female", label: "Nữ" }
  ];

  return (
    <MainLayout>

      <div className="personal-info">

        <h1>Thông tin cá nhân</h1>

        <Card>

          <Input placeholder="Họ và tên" />

          <div className="space"></div>

          <Input placeholder="Số điện thoại" />

          <div className="space"></div>

          <Input placeholder="Ngày sinh" />

          <div className="space"></div>

          <Select options={gender} />

          <div className="space"></div>

          <Input placeholder="Địa chỉ" />

          <div className="space"></div>

          <Button text="LƯU THÔNG TIN" />

        </Card>

      </div>

    </MainLayout>
  );
}

export default PersonalInfo;
