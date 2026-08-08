import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./SavedJobs.css";

function SavedJobs() {
  const handleViewJob = () => {
    /*
     * Chuyển đến chi tiết tin tuyển dụng.
     *
     * Việc lưu tin KHÔNG tạo Hồ sơ kết nối.
     */
  };

  const handleRemoveSavedJob = () => {
    /*
     * Bỏ tin khỏi danh sách đã lưu.
     *
     * Không ảnh hưởng đến Hồ sơ kết nối.
     */
  };

  return (
    <MainLayout>
      <div className="saved-jobs">

        <h1 className="saved-jobs-title">
          Tin tuyển dụng đã lưu
        </h1>

        <Card>

          <h2>Công nhân điện tử</h2>

          <Badge
            text="Đã lưu"
            color="#1976d2"
          />

          <p>
            <strong>Nhà cung ứng:</strong>{" "}
            Nhà cung ứng A
          </p>

          <p>
            <strong>Mức lương:</strong>{" "}
            12.000.000 VNĐ
          </p>

          <p>
            <strong>Khu vực:</strong>{" "}
            Bắc Ninh
          </p>

          <p>
            <strong>Trạng thái:</strong>{" "}
            Đang tuyển
          </p>

          <div className="saved-jobs-actions">

            <Button
              text="XEM CHI TIẾT"
              onClick={handleViewJob}
            />

            <div className="space"></div>

            <Button
              text="BỎ LƯU"
              onClick={handleRemoveSavedJob}
            />

          </div>

        </Card>

      </div>
    </MainLayout>
  );
}

export default SavedJobs;
