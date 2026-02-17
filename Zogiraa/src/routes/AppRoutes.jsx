import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BlankLayout from "../components/Footer/Knowledge_Hub/Layouts/BlankLayout";

import HomePage from "../pages/Home/HomePage";

import Contact from "../pages/ContactUs/Contact";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import TrainingPage from "../pages/Training/TrainingPage";
import UserPolicy from "../pages/Policies/UserPolicy";
import PartnershipPage from "../pages/Partnership/PartnershipPage";

import Blog from "../components/Footer/Knowledge_Hub/Blog";
import EmployerTips from "../components/Footer/Knowledge_Hub/EmployerTips";
import JobReadiness from "../components/Footer/Knowledge_Hub/JobReadiness";
import GovernmentSchemes from "../components/Footer/Knowledge_Hub/GovernmentSchemes";

<Routes>
  {/* Main Layout (with header + footer) */}
  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="contact-us" element={<Contact />} />
    <Route path="how-it-works" element={<HowItWorks />} />
    <Route path="training" element={<TrainingPage />} />
    <Route path="user-policy" element={<UserPolicy />} />
    <Route path="partner-with-us" element={<PartnershipPage />} />
  </Route>

  {/* Knowledge Pages (no header/footer) */}
  <Route element={<BlankLayout />}>
    <Route path="/knowledge/blog" element={<Blog />} />
    <Route path="/knowledge/employers" element={<EmployerTips />} />
    <Route path="/knowledge/job-readiness" element={<JobReadiness />} />
    <Route path="/knowledge/government-schemes" element={<GovernmentSchemes />} />
  </Route>
</Routes>
