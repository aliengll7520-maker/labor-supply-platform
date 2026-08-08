import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./AppliedJobs.css";

function AppliedJobs() {
  const handleViewConnection = (connectionId) => {
    /*
     * Sau này Backend sẽ lấy Hồ sơ kết nối
     * từ 00_HoSoKetNoi.
     *
     * connectionId là ID của Hồ sơ kết nối.
     */
    console.log("Xem Hồ sơ kết nối:", connectionId);
  };

  return (
    <MainLayout>
      <div className="applied-jobs">

        <h1 className="applied-jobs-title">
          Hồ sơ kết nối của tôi
        </h1>

        <Card>

          <h2>
            Công nhân điện tử
          </h2>

          <p>
            <strong>Nhà cung ứng:</strong>{" "}
            Nhà cung ứng A
          </p>

          <p>
            <strong>Ngày tạo:</strong>{" "}
            08/08/2026
          </p>

          <p>
            <strong>Trạng thái:</strong>
          </p>

          <Badge
            text="Đã tạo Hồ sơ kết nối"
            color="#2e7d32"
          />

          <div
            style={{
              marginTop: "16px",
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >

            <p>
              Hồ sơ này ghi nhận việc bạn đã tạo
              kết nối với Nhà cung ứng thông qua
              tin tuyển dụng.
            </p>

            <p>
              Các bước tiếp theo sẽ được cập nhật
              trong Quá trình kết nối.
            </p>

          </div>

          <div style={{ marginTop: "20px" }}>

            <Button
              text="XEM HỒ SƠ KẾT NỐI"
              onClick={() => handleViewConnection(1)}
            />

          </div>

        </Card>

      </div>
    </MainLayout>
  );
}

export default AppliedJobs;
