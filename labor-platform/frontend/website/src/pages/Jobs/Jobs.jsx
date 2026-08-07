import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Badge from "../../components/Badge/Badge";
import "./Jobs.css";

function Jobs() {
  return (
    <MainLayout>
      <div className="jobs">

        <h1 className="jobs-title">
          Việc làm
        </h1>

        <Card>

          <h2>Công nhân điện tử</h2>

          <Badge
            text="Đang tuyển"
            color="#2e7d32"
          />

          <p>Lương: 12.000.000 VNĐ</p>

          <p>Địa điểm: Bắc Ninh</p>

          <Button text="Xem chi tiết" />

        </Card>

        <Card>

          <h2>Công nhân may</h2>

          <Badge
            text="Đang tuyển"
            color="#2e7d32"
          />

          <p>Lương: 11.500.000 VNĐ</p>

          <p>Địa điểm: Hải Phòng</p>

          <Button text="Xem chi tiết" />

        </Card>

      </div>
    </MainLayout>
  );
}

export default Jobs;
