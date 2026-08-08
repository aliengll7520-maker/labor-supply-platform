import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import "./FilterJobs.css";

function FilterJobs() {
  const [province, setProvince] = useState("");

  const provinceOptions = [
    { value: "", label: "Tất cả tỉnh thành" },
    { value: "bacninh", label: "Bắc Ninh" },
    { value: "haiphong", label: "Hải Phòng" },
  ];

  const handleFilter = (event) => {
    event.preventDefault();

    /*
     * Chưa gọi API ở giai đoạn này.
     *
     * Backend sau này sẽ lọc dữ liệu từ:
     * 03_TinTuyenDung.sql
     *
     * Bộ lọc chỉ tác động đến danh sách tin tuyển dụng.
     * Không tạo Hồ sơ kết nối.
     * Không thu thập thêm dữ liệu Người lao động.
     */
  };

  return (
    <MainLayout>
      <div className="filter-jobs">

        <h1>Bộ lọc việc làm</h1>

        <Card>
          <form onSubmit={handleFilter}>

            <Select
              options={provinceOptions}
              value={province}
              onChange={(event) => setProvince(event.target.value)}
            />

            <div className="space"></div>

            <Button
              text="ÁP DỤNG BỘ LỌC"
              type="submit"
            />

          </form>
        </Card>

      </div>
    </MainLayout>
  );
}

export default FilterJobs;
