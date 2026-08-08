import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./ApplicationResult.css";

function ApplicationResult() {
  /*
   * Đây là màn hình kết quả sau khi Hồ sơ kết nối
   * được tạo thành công.
   *
   * Lưu ý:
   * Không gọi đây là "kết quả ứng tuyển".
   *
   * Đây là:
   * Hồ sơ kết nối đã được ghi nhận.
   */

  const handleBackToJobs = () => {
    window.location.hash = "#/jobs";
  };

  const handleViewConnection = () => {
    window.location.hash = "#/connections";
  };

  return (
    <MainLayout>
      <div className="application-result">

        <h1 className="application-result-title">
          Hồ sơ kết nối
        </h1>

        <Card>

          <div className="application-result-success">

            <h2>
              Hồ sơ kết nối đã được ghi nhận
            </h2>

            <p>
              Thông tin của bạn đã được hệ thống
              ghi nhận để kết nối với Nhà cung ứng.
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
              <strong>Trạng thái:</strong>
            </p>

            <Badge
              text="Đã tạo Hồ sơ kết nối"
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
              <strong>
                Số điện thoại Nhà cung ứng
              </strong>
            </p>

            <p>
              Số điện thoại chỉ được mở sau khi
              Hồ sơ kết nối được hệ thống ghi nhận.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
              }}
            >
              Quá trình kết nối sẽ tiếp tục được
              ghi nhận trong hồ sơ của bạn.
            </p>

          </div>

          <div
            style={{
              marginTop: "20px",
            }}
          >

            <Button
              text="XEM HỒ SƠ KẾT NỐI"
              onClick={handleViewConnection}
            />

            <div className="space"></div>

            <Button
              text="TIẾP TỤC XEM VIỆC"
              onClick={handleBackToJobs}
            />

          </div>

        </Card>

      </div>
    </MainLayout>
  );
}

export default ApplicationResult;
