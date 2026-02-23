import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";

const MainLayout = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [preferredRole, setPreferredRole] = useState('');

  const openLogin = (role = '') => {
    setPreferredRole(role);
    setIsLoginOpen(true);
  };

  return (
    <>
      <Header onLoginClick={openLogin} />

      <main
        style={{
          minHeight: "calc(100vh - 160px)",
        }}
      >
        <Outlet context={{ openLogin }} />
      </main>

      <Footer />

      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        initialRole={preferredRole}
      />
    </>
  );
};

export default MainLayout;
