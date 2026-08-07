
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
          Việc làm đã ứng tuyển
        </h1>

        <Card>

          <h2>Công nhân điện tử</h2>

          <Badge
            text="Đã ứng tuyển"
            color="#2e7d32"
          />

          <p><strong>Nhà cung ứng:</strong> Nhà cung ứng A</p>

          <p><strong>Ngày ứng tuyển:</strong> 07/08/2026</p>

          <p><strong>Trạng thái:</strong> Đang chờ xử lý</p>

          <div className="applied-jobs-actions">

            <Button text="XEM CHI TIẾT" />

          </div>

        </Card>

      </div>
    </MainLayout>
  );
}

export default AppliedJobs;
