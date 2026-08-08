import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import "./JobDetail.css";

function JobDetail() {
  const [tinTuyenDungId, setTinTuyenDungId] = useState("");
  const [nhaCungUngId, setNhaCungUngId] = useState("");

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

    /*
     * Khi Backend hoạt động, ID Nhà cung ứng
     * sẽ được lấy từ Tin tuyển dụng.
     */
    setNhaCungUngId(
      params.get("nha_cung_ung_id") || "1"
    );
  }, []);

  const handleRegisterInterviewProfile = () => {
    if (!tinTuyenDungId || !nhaCungUngId) {
      return;
    }

    window.location.hash =
      `#/register?tin_tuyen_dung_id=${encodeURIComponent(
        tinTuyenDungId
      )}` +
      `&nha_cung_ung_id=${encodeURIComponent(
        nhaCungUngId
      )}`;
  };

  return (
    <MainLayout>
      <div className="job-detail">

        <h1 className="job-detail-title">
          Chi tiết việc làm
        </h1>

        <Card>

          <h2>
            Công nhân điện tử
          </h2>

          <Badge
            text="Đang tuyển"
            color="#2e7d32"
          />

          <p>
            <strong>Nhà cung ứng:</strong>{" "}
            Nhà cung ứng A
          </p>

          <p>
            <strong>Ngành nghề:</strong>{" "}
            Sản xuất
          </p>

          <p>
            <strong>Mức lương:</strong>{" "}
            12.000.000 VNĐ
          </p>

          <p>
            <strong>Địa điểm:</strong>{" "}
            Bắc Ninh
          </p>

          <p>
            <strong>Số lượng tuyển:</strong>{" "}
            100 người
          </p>

          <p>
            <strong>Mô tả công việc:</strong>{" "}
            Tham gia sản xuất và lắp ráp linh kiện
            theo nội dung tuyển dụng.
          </p>

          <div
            style={{
              marginTop: "28px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >

            <h3>
              Đăng ký Hồ sơ phỏng vấn
            </h3>

            <p>
              Nếu bạn quan tâm đến công việc này,
              hãy đăng ký Hồ sơ phỏng vấn cho
              vị trí này.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
              }}
            >
              Bạn chỉ cần cung cấp 3 thông tin cơ bản:
              Họ và tên, Số điện thoại và Quê quán.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#666",
              }}
            >
              Sau khi đăng ký thành công, thông tin
              liên hệ của Nhà cung ứng sẽ được hiển thị
              để bạn chủ động liên hệ.
            </p>

            <Button
              text="ĐĂNG KÝ HỒ SƠ PHỎNG VẤN"
              onClick={handleRegisterInterviewProfile}
            />

          </div>

        </Card>

      </div>
    </MainLayout>
  );
}

export default JobDetail;
