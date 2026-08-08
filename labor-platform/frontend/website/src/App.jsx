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
    const hash = window.location.hash || "#/jobs";

    const routePart = hash.split("?")[0];

    return routePart.replace(/^#\/?/, "") || "jobs";
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
   * CỬA VÀO CÔNG KHAI
   * =====================================================
   *
   * Người lao động không cần đăng nhập để:
   *
   * - Xem tin tuyển dụng.
   * - Tìm kiếm việc làm.
   * - Lọc việc làm.
   * - Xem chi tiết tin.
   *
   * Đăng nhập chỉ là chức năng tùy chọn.
   *
   * =====================================================
   */

  switch (currentRoute) {

    /*
     * -----------------------------------------------
     * TIN TUYỂN DỤNG CÔNG KHAI
     * -----------------------------------------------
     */

    case "":
    case "jobs":
      return <Jobs />;

    case "search":
      return <SearchJobs />;

    case "filter":
      return <FilterJobs />;

    case "job-detail":
      return <JobDetail />;

    /*
     * -----------------------------------------------
     * ĐĂNG NHẬP / ĐĂNG KÝ
     *
     * Không phải cửa vào bắt buộc.
     * -----------------------------------------------
     */

    case "login":
      return <Login />;

    case "register":
      return <Register />;

    /*
     * -----------------------------------------------
     * NGƯỜI LAO ĐỘNG
     * -----------------------------------------------
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
     * -----------------------------------------------
     * DASHBOARD
     *
     * Tạm giữ cho giai đoạn giao diện.
     * Chưa lấy dữ liệu thật.
     * -----------------------------------------------
     */

    case "dashboard":
      return <Dashboard />;

    /*
     * -----------------------------------------------
     * ROUTE KHÔNG HỢP LỆ
     *
     * Luôn đưa khách về tin tuyển dụng công khai.
     * Không bắt đăng nhập.
     * -----------------------------------------------
     */

    default:
      window.location.hash = "#/jobs";
      return <Jobs />;
  }
}

export default App;
