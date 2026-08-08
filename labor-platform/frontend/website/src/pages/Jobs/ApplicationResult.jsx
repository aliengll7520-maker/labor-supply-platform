import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./ApplicationResult.css";

function ApplicationResult() {
  return (
    <MainLayout>
      <div className="application-result">

        <h1 className="application-result-title">
          Hồ sơ kết nối
        </h1>

        <Card>

          <div className="application-result-success">
            <h2>Hồ sơ kết nối đã được tạo</h2>

            <p>
              Thông tin của bạn đã được ghi nhận trên hệ thống.
            </p>
          </div>

          <div className="application-result-info">

            <p>
              <strong>Công việc:</strong>{" "}
              Công nhân điện tử
            </p>

            <p>
              <strong>Nhà cung ứng:</strong>{" "}
              Nhà cung ứng A
            </p>

            <p>
              <strong>Ngày tạo:</strong>{" "}
              07/08/2026
            </p>

            <p>
              <strong>Trạng thái:</strong>
            </p>

            <Badge
              text="Mới tạo"
              color="#2e7d32"
            />

          </div>

          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <p>
              Hồ sơ kết nối của bạn đã được tạo.
              Nhà cung ứng có thể tiếp nhận và cập nhật
              quá trình xử lý hồ sơ.
            </p>
          </div>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <Button text="XEM HỒ SƠ KẾT NỐI" />
          </div>

        </Card>

      </div>
    </MainLayout>
  );
}

export default ApplicationResult; 
