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
          Kết quả ứng tuyển
        </h1>

        <Card>

          <h2>Công nhân điện tử</h2>

          <Badge
            text="Đã trúng tuyển"
            color="#2e7d32"
          />

          <p><strong>Nhà cung ứng:</strong> Nhà cung ứng A</p>

          <p><strong>Ngày thông báo:</strong> 18/08/2026</p>

          <p><strong>Kết quả:</strong> Hồ sơ đã được nhà cung ứng tiếp nhận.</p>

          <p><strong>Trạng thái:</strong> Chờ hướng dẫn nhận việc.</p>

          <Button text="XEM CHI TIẾT" />

        </Card>

      </div>
    </MainLayout>
  );
}

export default ApplicationResult;
