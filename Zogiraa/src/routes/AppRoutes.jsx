import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import PrivacyPage from "../pages/PrivacyPolicy/PrivacyPage";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
import PaymentPolicy from "../pages/PaymentPolicy/PaymentPolicy";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/payment-policy" element={<PaymentPolicy />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
