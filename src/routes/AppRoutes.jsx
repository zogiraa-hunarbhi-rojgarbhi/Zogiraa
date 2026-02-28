import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

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
import AboutZogiraa from "../pages/About/components/About";

import Blog from "../components/Footer/Knowledge_Hub/Blog";
import EmployerTips from "../components/Footer/Knowledge_Hub/EmployerTips";
import JobReadiness from "../components/Footer/Knowledge_Hub/JobReadiness";
import GovernmentSchemes from "../components/Footer/Knowledge_Hub/GovernmentSchemes";

import ServicesAndPlans from "../pages/ServicesAndPlans/ServicesAndPlans";
import KnowledgeLayout from "../components/Footer/Knowledge_Hub/KnowledgeLayout";
import SupplierPage from "../pages/Supplier/SupplierPage";
import Career from "../pages/Career/Career";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="training" element={<TrainingPage />} />
        <Route path="services-and-plans" element={<ServicesAndPlans />} />
        <Route path="suppliers" element={<SupplierPage />} />
        <Route path="about" element={<AboutZogiraa />} />
        <Route path="careers" element={<Career />} />
        <Route path="user-policy" element={<UserPolicy />} />
        <Route path="partner-with-us" element={<PartnershipPage />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPage />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="payment-policy" element={<PaymentPolicy />} />

        {/* Knowledge Hub Nested Routes within MainLayout */}
        <Route path="knowledge" element={<KnowledgeLayout />}>
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
