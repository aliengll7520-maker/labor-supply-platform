import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import "./FilterJobs.css";

function FilterJobs() {

  const province = [
    { value: "", label: "Chọn tỉnh thành" },
    { value: "bacninh", label: "Bắc Ninh" },
    { value: "haiphong", label: "Hải Phòng" }
  ];

  return (
    <MainLayout>

      <div className="filter-jobs">

        <h1>Bộ lọc việc làm</h1>

        <Card>

          <Select options={province} />

          <div className="space"></div>

          <Button text="ÁP DỤNG BỘ LỌC" />

        </Card>

      </div>

    </MainLayout>
  );
}

export default FilterJobs;
