import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/Home/HomePage";
import Contact from "../pages/ContactUs/Contact";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import TrainingPage from "../pages/Training/TrainingPage";
import UserPolicy from "../pages/Policies/UserPolicy";
import PartnershipPage from "../pages/Partnership/PartnershipPage";

import Blog from "../pages/KnowledgeHub/Blog";
import EmployerTips from "../pages/KnowledgeHub/EmployerTips";
import JobReadiness from "../pages/KnowledgeHub/JobReadiness";
import GovernmentSchemes from "../pages/KnowledgeHub/GovernmentSchemes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="training" element={<TrainingPage />} />
        <Route path="user-policy" element={<UserPolicy />} />
        <Route path="partner-with-us" element={<PartnershipPage />} />

        {/* Knowledge Pages – use main layout via nesting */}
        <Route path="knowledge">
          <Route path="blog" element={<Blog />} />
          <Route path="employers" element={<EmployerTips />} />
          <Route path="job-readiness" element={<JobReadiness />} />
          <Route path="government-schemes" element={<GovernmentSchemes />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
