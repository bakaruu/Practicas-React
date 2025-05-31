import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Summary from "./pages/Summary";
import { UserProvider } from "./context/UserContext";
import { ColorModeProvider } from "./theme/ColorModeContext";

export default function App() {
  return (
    <ColorModeProvider>
      <UserProvider>
        <Router>
          <NavigationBar />

          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </Router>
      </UserProvider>
    </ColorModeProvider>
  );
}
