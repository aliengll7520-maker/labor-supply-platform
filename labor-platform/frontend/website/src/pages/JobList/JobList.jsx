import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Badge from "../../components/Badge/Badge";
import "./JobList.css";

function JobList() {
  return (
    <MainLayout>
      <div className="job-list">

        <h1 className="job-list-title">
          Danh sách việc làm
        </h1>

        <Card>

          <h2>Công nhân lắp ráp điện tử</h2>

          <Badge
            text="Đang tuyển"
            color="#2e7d32"
          />

          <p>Lương: 12.000.000 VNĐ</p>

          <p>Địa điểm: Bắc Ninh</p>

          <p>Số lượng: 100 người</p>

          <Button text="Xem chi tiết" />

        </Card>

      </div>
    </MainLayout>
  );
}

export default JobList;
