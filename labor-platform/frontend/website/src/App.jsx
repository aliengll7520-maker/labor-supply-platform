import React, { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Jobs from "./pages/Jobs/Jobs";
import JobDetail from "./pages/Jobs/JobDetail";
import SearchJobs from "./pages/Jobs/SearchJobs";
import FilterJobs from "./pages/Jobs/FilterJobs";
import SavedJobs from "./pages/Jobs/SavedJobs";

import AppliedJobs from "./pages/Jobs/AppliedJobs";
import ApplicationResult from "./pages/Jobs/ApplicationResult";
import InterviewSchedule from "./pages/Jobs/InterviewSchedule";

import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [currentRoute, setCurrentRoute] = useState("login");

  const navigate = (route) => {
    setCurrentRoute(route);
  };

  /*
   * ROUTE CORE CỦA NỀN TẢNG
   *
   * Chỉ giữ 3 tầng:
   *
   * 1. QUẢN TRỊ
   * 2. NHÀ CUNG ỨNG
   * 3. NGƯỜI LAO ĐỘNG
   *
   * Không có tầng Doanh nghiệp tuyển dụng trực tiếp.
   *
   * Backend và hệ thống xác thực thật sẽ được xây sau.
   */

  switch (currentRoute) {
    /*
     * ==================================================
     * CỬA VÀO
     * ==================================================
     */

    case "login":
      return (
        <Login
          onRegister={() => navigate("register")}
        />
      );

    case "register":
      return <Register />;

    /*
     * ==================================================
     * NGƯỜI LAO ĐỘNG
     * ==================================================
     */

    case "worker-jobs":
      return <Jobs />;

    case "worker-search":
      return <SearchJobs />;

    case "worker-filter":
      return <FilterJobs />;

    case "worker-job-detail":
      return <JobDetail />;

    case "worker-saved-jobs":
      return <SavedJobs />;

    case "worker-connections":
      return <AppliedJobs />;

    case "worker-connection-result":
      return <ApplicationResult />;

    case "worker-interview":
      return <InterviewSchedule />;

    case "worker-profile":
      return <Profile />;

    /*
     * ==================================================
     * DASHBOARD
     *
     * Tạm giữ làm màn hình chờ.
     * Chưa gắn nghiệp vụ thật cho đến khi Backend hoàn thành.
     * ==================================================
     */

    case "dashboard":
      return <Dashboard />;

    /*
     * ==================================================
     * ROUTE MẶC ĐỊNH
     * ==================================================
     */

    default:
      return <Login />;
  }
}

export default App;
