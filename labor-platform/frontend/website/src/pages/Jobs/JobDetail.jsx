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

          <p><strong>Nhà cung ứng:</strong> Nhà cung ứng A</p>

          <p><strong>Mức lương:</strong> 12.000.000 VNĐ</p>

          <p><strong>Khu vực làm việc:</strong> Bắc Ninh</p>

          <p><strong>Hình thức làm việc:</strong> Toàn thời gian</p>

          <p><strong>Số lượng tuyển:</strong> 100 người</p>

          <p>
            <strong>Mô tả công việc:</strong> Tham gia sản xuất và lắp ráp linh
            kiện điện tử theo hướng dẫn của nhà cung ứng.
          </p>

          <Button text="ỨNG TUYỂN NGAY" />

        </Card>

      </div>
    </MainLayout>
  );
}

export default JobDetail;
