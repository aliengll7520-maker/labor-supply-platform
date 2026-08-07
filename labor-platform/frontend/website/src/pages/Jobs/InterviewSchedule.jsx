import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./InterviewSchedule.css";

function InterviewSchedule() {
  return (
    <MainLayout>
      <div className="interview-schedule">

        <h1 className="interview-title">
          Lịch phỏng vấn
        </h1>

        <Card>

          <h2>Công nhân điện tử</h2>

          <Badge
            text="Đã lên lịch"
            color="#1976d2"
          />

          <p><strong>Nhà cung ứng:</strong> Nhà cung ứng A</p>

          <p><strong>Ngày phỏng vấn:</strong> 15/08/2026</p>

          <p><strong>Giờ phỏng vấn:</strong> 08:30</p>

          <p><strong>Địa điểm:</strong> Văn phòng Nhà cung ứng A</p>

          <p><strong>Trạng thái:</strong> Chờ xác nhận</p>

          <Button text="XÁC NHẬN THAM GIA" />

        </Card>

      </div>
    </MainLayout>
  );
}

export default InterviewSchedule;
