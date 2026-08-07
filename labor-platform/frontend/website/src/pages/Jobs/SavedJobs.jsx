import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./SavedJobs.css";

function SavedJobs() {
  return (
    <MainLayout>
      <div className="saved-jobs">

        <h1 className="saved-jobs-title">
          Việc làm đã lưu
        </h1>

        <Card>

          <h2>Công nhân điện tử</h2>

          <Badge
            text="Đã lưu"
            color="#1976d2"
          />

          <p><strong>Công ty:</strong> ABC Electronics</p>

          <p><strong>Lương:</strong> 12.000.000 VNĐ</p>

          <p><strong>Địa điểm:</strong> Bắc Ninh</p>

          <div className="saved-jobs-actions">
            <Button text="XEM CHI TIẾT" />
            <div className="space"></div>
            <Button text="BỎ LƯU" />
          </div>

        </Card>

      </div>
    </MainLayout>
  );
}

export default SavedJobs;
