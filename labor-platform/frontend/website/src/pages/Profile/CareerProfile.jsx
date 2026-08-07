import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import "./CareerProfile.css";

function CareerProfile() {
  return (
    <MainLayout>

      <div className="career-profile">

        <h1>Hồ sơ nghề nghiệp</h1>

        <Card>

          <Input placeholder="Vị trí mong muốn" />

          <div className="space"></div>

          <Input placeholder="Mức lương mong muốn" />

          <div className="space"></div>

          <Input placeholder="Khu vực mong muốn làm việc" />

          <div className="space"></div>

          <Textarea placeholder="Mục tiêu nghề nghiệp" />

          <div className="space"></div>

          <Button text="LƯU HỒ SƠ" />

        </Card>

      </div>

    </MainLayout>
  );
}

export default CareerProfile;
