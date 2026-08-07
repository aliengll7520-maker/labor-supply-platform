import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import "./ApplyJob.css";

function ApplyJob() {

  return (
    <MainLayout>

      <div className="apply-job">

        <h1>Ứng tuyển</h1>

        <Card>

          <Input placeholder="Họ và tên" />

          <div className="space"></div>

          <Input placeholder="Số điện thoại" />

          <div className="space"></div>

          <Textarea placeholder="Giới thiệu bản thân..." />

          <div className="space"></div>

          <Button text="GỬI HỒ SƠ" />

        </Card>

      </div>

    </MainLayout>
  );
}

export default ApplyJob;
