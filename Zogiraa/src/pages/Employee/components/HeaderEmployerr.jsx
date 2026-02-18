import { useState } from "react";
import Login from "../../../components/Login/Login";
import { HardHat } from "lucide-react";
import "./HeaderEmployee.css"; // Import your new CSS file

function HeaderEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <header className="header-fixed">
        <div className="header-container">
          <div className="nav-grid">

            {/* logo part */}
            <div className="logo-section">
                <HardHat size={20} color="#3b82f6" />
                <div className="logo-text">Hire Mate</div>
            </div>

            {/* action section */}
            <div className="actions-section">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-login"
              >
                Login
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-signup"
              >
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderEmployee;