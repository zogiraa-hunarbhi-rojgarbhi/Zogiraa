import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BlankLayout from "../components/Footer/Knowledge_Hub/Layouts/BlankLayout";

import HomePage from "../pages/Home/HomePage";

import Blog from "../components/Footer/Knowledge_Hub/Blog";
import EmployerTips from "../components/Footer/Knowledge_Hub/EmployerTips";
import JobReadiness from "../components/Footer/Knowledge_Hub/JobReadiness";
import GovernmentSchemes from "../components/Footer/Knowledge_Hub/GovernmentSchemes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Website Layout (Header + Footer) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      {/* Knowledge Pages (NO Header + NO Footer) */}
      <Route element={<BlankLayout />}>
        <Route path="/knowledge/blog" element={<Blog />} />
        <Route path="/knowledge/employers" element={<EmployerTips />} />
        <Route path="/knowledge/job-readiness" element={<JobReadiness />} />
        <Route path="/knowledge/government-schemes" element={<GovernmentSchemes />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
