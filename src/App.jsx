import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import Popup from "./components/Popup/Popup";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Popup />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
