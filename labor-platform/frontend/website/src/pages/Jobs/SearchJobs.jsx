import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import "./SearchJobs.css";

function SearchJobs() {
  return (
    <MainLayout>
      <div className="search-jobs">

        <h1>Tìm kiếm việc làm</h1>

        <Input placeholder="Nhập tên công việc hoặc công ty..." />

        <div className="space"></div>

        <Button text="TÌM KIẾM" />

        <div className="space"></div>

        <Card>
          <h3>Công nhân điện tử</h3>
          <p>Bắc Ninh</p>
        </Card>

      </div>
    </MainLayout>
  );
}

export default SearchJobs;
