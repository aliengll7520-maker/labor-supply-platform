import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./AppliedJobs.css";

function AppliedJobs() {
  return (
    <MainLayout>
      <div className="applied-jobs">

        <h1 className="applied-jobs-title">
          Hồ sơ kết nối của tôi
        </h1>

        <Card>

          <h2>Công nhân điện tử</h2>

          <p>
            <strong>Nhà cung ứng:</strong> Nhà cung ứng A
          </p>

          <p>
            <strong>Ngày tạo hồ sơ:</strong> 07/08/2026
          </p>

          <div style={{ marginBottom: "16px" }}>
            <Badge
              text="Mới tạo"
              color="#2e7d32"
            />
          </div>

          <p>
            Hồ sơ kết nối được tạo khi bạn đăng ký
            thông tin để xem số điện thoại Nhà cung ứng.
          </p>

          <div className="applied-jobs-actions">

            <Button text="XEM HỒ SƠ KẾT NỐI" />

          </div>

        </Card>

      </div>
    </MainLayout>
  );
}

export default AppliedJobs;
