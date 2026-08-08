import React, { useEffect, useState } from "react";

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
  const getRoute = () => {
    const hash = window.location.hash;

    if (!hash || hash === "#/" || hash === "#/jobs") {
      return "jobs";
    }

    return hash.replace("#/", "");
  };

  const [currentRoute, setCurrentRoute] = useState(getRoute());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getRoute());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);

  /*
   * =====================================================
   * NGUYÊN TẮC CỬA VÀO
   * =====================================================
   *
   * Người lao động KHÔNG bắt buộc đăng nhập để:
   *
   * - Xem tin tuyển dụng.
   * - Tìm việc.
   * - Lọc việc.
   * - Xem chi tiết tin.
   *
   * Đăng nhập chỉ là chức năng tùy chọn.
   *
   * Khi người lao động muốn xem số điện thoại
   * Nhà cung ứng:
   *
   * Tin tuyển dụng
   *       ↓
   * Yêu cầu xem số điện thoại
   *       ↓
   * Đăng ký 3 trường
   *       ↓
   * Tạo Hồ sơ kết nối
   *       ↓
   * Mở số điện thoại Nhà cung ứng
   *
   * =====================================================
   */

  switch (currentRoute) {
    /*
     * ================================================
     * CỬA VÀO CÔNG KHAI
     * ================================================
     */

    case "jobs":
      return <Jobs />;

    case "search":
      return <SearchJobs />;

    case "filter":
      return <FilterJobs />;

    case "job-detail":
      return <JobDetail />;

    /*
     * ================================================
     * ĐĂNG NHẬP / ĐĂNG KÝ
     *
     * Chỉ là chức năng tùy chọn.
     * Không phải cửa vào bắt buộc.
     * ================================================
     */

    case "login":
      return <Login />;

    case "register":
      return <Register />;

    /*
     * ================================================
     * NGƯỜI LAO ĐỘNG
     * ================================================
     */

    case "saved-jobs":
      return <SavedJobs />;

    case "connections":
      return <AppliedJobs />;

    case "connection-result":
      return <ApplicationResult />;

    case "interview":
      return <InterviewSchedule />;

    case "profile":
      return <Profile />;

    /*
     * ================================================
     * DASHBOARD
     *
     * Tạm giữ.
     * Chưa có dữ liệu Backend thật.
     * ================================================
     */

    case "dashboard":
      return <Dashboard />;

    /*
     * ================================================
     * MẶC ĐỊNH
     *
     * Không đăng nhập.
     * Luôn đưa khách về danh sách tin công khai.
     * ================================================
     */

    default:
      window.location.hash = "#/jobs";
      return <Jobs />;
  }
}

export default App;
