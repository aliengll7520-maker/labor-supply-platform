import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./JobDetail.css";

function JobDetail() {
  return (
    <MainLayout>

      <div className="job-detail">

        <h1>Chi tiết việc làm</h1>

        <Card>

          <h2>Công nhân điện tử</h2>

          <Badge
            text="Đang tuyển"
            color="#2e7d32"
          />

          <p><strong>Công ty:</strong> ABC Electronics</p>

          <p><strong>Lương:</strong> 12.000.000 VNĐ</p>

          <p><strong>Địa điểm:</strong> Bắc Ninh</p>

          <p><strong>Ca làm:</strong> Hành chính</p>

          <p><strong>Số lượng:</strong> 100</p>

          <p><strong>Mô tả:</strong> Lắp ráp linh kiện điện tử.</p>

          <Button text="ỨNG TUYỂN NGAY" />

        </Card>

      </div>

    </MainLayout>
  );
}

export default JobDetail;
