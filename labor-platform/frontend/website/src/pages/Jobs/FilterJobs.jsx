import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import "./FilterJobs.css";

function FilterJobs() {
  const [province, setProvince] = useState("");

  const provinceOptions = [
    {
      value: "",
      label: "Tất cả tỉnh thành",
    },
    {
      value: "bacninh",
      label: "Bắc Ninh",
    },
    {
      value: "haiphong",
      label: "Hải Phòng",
    },
  ];

  const handleFilter = (event) => {
    event.preventDefault();

    /*
     * Bộ lọc chỉ tác động đến Tin tuyển dụng.
     *
     * Người lao động:
     * - Không cần đăng nhập.
     * - Không cần đăng ký.
     * - Không tạo Hồ sơ kết nối khi lọc tin.
     *
     * Backend sau này sẽ lọc dữ liệu từ:
     * 03_TinTuyenDung
     */
  };

  const handleViewJob = () => {
    /*
     * Xem chi tiết tin.
     *
     * Hồ sơ kết nối chỉ được tạo khi người lao động
     * yêu cầu xem số điện thoại Nhà cung ứng.
     */
    window.location.hash = "#/job-detail";
  };

  return (
    <MainLayout>
      <div className="filter-jobs">

        <h1>
          Lọc việc làm
        </h1>

        <p>
          Lọc các tin tuyển dụng công khai
          theo nhu cầu của bạn.
        </p>

        <Card>

          <form onSubmit={handleFilter}>

            <Select
              options={provinceOptions}
              value={province}
              onChange={(event) =>
                setProvince(event.target.value)
              }
            />

            <div className="space"></div>

            <Button
              text="ÁP DỤNG BỘ LỌC"
              type="submit"
            />

          </form>

        </Card>

        <div className="space"></div>

        <Card>

          <h2>
            Công nhân điện tử
          </h2>

          <p>
            <strong>Nhà cung ứng:</strong>{" "}
            Nhà cung ứng A
          </p>

          <p>
            <strong>Địa điểm:</strong>{" "}
            Bắc Ninh
          </p>

          <p>
            <strong>Mức lương:</strong>{" "}
            12.000.000 VNĐ
          </p>

          <Button
            text="XEM CHI TIẾT"
            onClick={handleViewJob}
          />

        </Card>

      </div>
    </MainLayout>
  );
}

export default FilterJobs;
