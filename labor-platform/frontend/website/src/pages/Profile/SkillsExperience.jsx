import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";
import "./SkillsExperience.css";

function SkillsExperience() {
  return (
    <MainLayout>

      <div className="skills-experience">

        <h1>Kỹ năng & Kinh nghiệm</h1>

        <Card>

          <Input placeholder="Nghề nghiệp mong muốn" />

          <div className="space"></div>

          <Input placeholder="Số năm kinh nghiệm" />

          <div className="space"></div>

          <Textarea placeholder="Kỹ năng chuyên môn" />

          <div className="space"></div>

          <Textarea placeholder="Kinh nghiệm làm việc" />

          <div className="space"></div>

          <Button text="LƯU THÔNG TIN" />

        </Card>

      </div>

    </MainLayout>
  );
}

export default SkillsExperience;
