import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DogsPage from "./pages/DogsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* página principal  ->  DogsPage */}
        <Route path="/" element={<DogsPage />} />

        {/* también /dogs por si quieres mantenerla */}
        <Route path="/dogs" element={<DogsPage />} />

        {/* cualquier otra ruta redirige a / */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
