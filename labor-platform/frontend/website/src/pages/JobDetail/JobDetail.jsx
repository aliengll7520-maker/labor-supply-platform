import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Badge from "../../components/Badge/Badge";
import "./JobDetail.css";

function JobDetail() {
  return (
    <MainLayout>
      <div className="job-detail">

        <h1 className="job-detail-title">
          Chi tiết việc làm
        </h1>

        <Card>

          <h2>Công nhân lắp ráp điện tử</h2>

          <Badge
            text="Đang tuyển"
            color="#2e7d32"
          />

          <p><strong>Mức lương:</strong> 12.000.000 VNĐ</p>

          <p><strong>Địa điểm:</strong> Bắc Ninh</p>

          <p><strong>Số lượng:</strong> 100 người</p>

          <p><strong>Thời gian làm việc:</strong> Theo ca</p>

          <p><strong>Mô tả công việc:</strong> Lắp ráp linh kiện điện tử theo dây chuyền sản xuất.</p>

          <Button text="Ứng tuyển ngay" />

        </Card>

      </div>
    </MainLayout>
  );
}

export default JobDetail;
