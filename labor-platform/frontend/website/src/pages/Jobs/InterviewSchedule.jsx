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
          Lịch hẹn trong Hồ sơ kết nối
        </h1>

        <Card>

          <h2>Công nhân điện tử</h2>

          <p>
            <strong>Nhà cung ứng:</strong>{" "}
            Nhà cung ứng A
          </p>

          <div style={{ marginBottom: "16px" }}>
            <Badge
              text="Đã hẹn"
              color="#1976d2"
            />
          </div>

          <p>
            <strong>Ngày hẹn:</strong>{" "}
            15/08/2026
          </p>

          <p>
            <strong>Giờ hẹn:</strong>{" "}
            08:30
          </p>

          <p>
            <strong>Địa điểm:</strong>{" "}
            Văn phòng Nhà cung ứng A
          </p>

          <p>
            <strong>Trạng thái Hồ sơ kết nối:</strong>{" "}
            Đã hẹn
          </p>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <p>
              Lịch hẹn này là một bước trong quá trình
              xử lý Hồ sơ kết nối.
            </p>

            <p>
              Mọi thay đổi trạng thái sẽ được ghi nhận
              vào Quá trình kết nối.
            </p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <Button text="XÁC NHẬN LỊCH HẸN" />
          </div>

        </Card>

      </div>
    </MainLayout>
  );
}

export default InterviewSchedule;
