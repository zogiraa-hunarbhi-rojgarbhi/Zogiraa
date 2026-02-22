import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";

const MainLayout = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <Header onLoginClick={() => setIsLoginOpen(true)} />

      <main
        style={{
          minHeight: "calc(100vh - 160px)",
        }}
      >
        <Outlet />
      </main>

      <Footer />

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default MainLayout;
