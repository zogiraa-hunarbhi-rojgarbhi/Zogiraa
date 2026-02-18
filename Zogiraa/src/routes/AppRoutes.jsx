import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BlankLayout from "../components/Footer/Knowledge_Hub/Layouts/BlankLayout";

import HomePage from "../pages/Home/HomePage";
import Contact from "../pages/ContactUs/Contact";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import TrainingPage from "../pages/Training/TrainingPage";
import UserPolicy from "../pages/Policies/UserPolicy";
import PartnershipPage from "../pages/Partnership/PartnershipPage";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import PrivacyPage from "../pages/PrivacyPolicy/PrivacyPage";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
import PaymentPolicy from "../pages/PaymentPolicy/PaymentPolicy";

import Blog from "../components/Footer/Knowledge_Hub/Blog";
import EmployerTips from "../components/Footer/Knowledge_Hub/EmployerTips";
import JobReadiness from "../components/Footer/Knowledge_Hub/JobReadiness";
import GovernmentSchemes from "../components/Footer/Knowledge_Hub/GovernmentSchemes";
import Supplier from "../pages/Supplier/Supplier";

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
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPage />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="payment-policy" element={<PaymentPolicy />} />
        <Route path="Supplier" element={<Supplier />} />
      </Route>

      {/* Knowledge Pages */}
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
