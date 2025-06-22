import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" replace />} />

      <Route path="/Home" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
