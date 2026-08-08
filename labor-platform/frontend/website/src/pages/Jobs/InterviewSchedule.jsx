import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./InterviewProfileResult.css";

function InterviewProfileResult() {
  const [tinTuyenDungId, setTinTuyenDungId] = useState("");
  const [nhaCungUngId, setNhaCungUngId] = useState("");

  /*
   * Dữ liệu mẫu ở giai đoạn Frontend.
   *
   * Khi Backend hoạt động, số này phải lấy
   * từ dữ liệu Nhà cung ứng sau khi Hồ sơ
   * phỏng vấn được tạo thành công.
   */
  const [soDienThoaiNhaCungUng] =
    useState("090x xxx xxx");

  useEffect(() => {
    const hash = window.location.hash;
    const queryIndex = hash.indexOf("?");

    if (queryIndex === -1) {
      return;
    }

    const params = new URLSearchParams(
      hash.substring(queryIndex + 1)
    );

    setTinTuyenDungId(
      params.get("tin_tuyen_dung_id") || ""
    );

    setNhaCungUngId(
      params.get("nha_cung_ung_id") || ""
    );
  }, []);

  const handleViewInterviewProfiles = () => {
    window.location.hash = "#/interview-profiles";
  };

  const handleBackToJobs = () => {
    window.location.hash = "#/jobs";
  };

  return (
    <MainLayout>
      <div className="interview-profile-result">

        <h1 className="interview-profile-result-title">
          Đăng ký Hồ sơ phỏng vấn
        </h1>

        <Card>

          <div className="interview-profile-result-success">

            <h2>
              Đăng ký Hồ sơ phỏng vấn thành công
            </h2>

            <p>
              Thông tin của bạn đã được ghi nhận
              cho vị trí này.
            </p>

          </div>

          <div className="interview-profile-result-info">

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
              text="Đã đăng ký Hồ sơ phỏng vấn"
              color="#2e7d32"
            />

          </div>

          {/*
           * ==========================================
           * SỐ ĐIỆN THOẠI TỰ ĐỘNG HIỂN THỊ
           * ==========================================
           *
           * Không có thêm nút "Xem số điện thoại".
           *
           * Việc đăng ký thành công chính là điều kiện
           * để hiển thị thông tin liên hệ.
           */}

          <div
            style={{
              marginTop: "24px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >

            <p>
              <strong>
                Số điện thoại Nhà cung ứng
              </strong>
            </p>

            <p
              style={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              {soDienThoaiNhaCungUng}
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
              }}
            >
              Bạn có thể chủ động liên hệ Nhà cung ứng
              để trao đổi về công việc và lịch phỏng vấn.
            </p>

          </div>

          <div
            style={{
              marginTop: "20px",
            }}
          >

            <Button
              text="XEM HỒ SƠ PHỎNG VẤN"
              onClick={handleViewInterviewProfiles}
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

export default InterviewProfileResult;
