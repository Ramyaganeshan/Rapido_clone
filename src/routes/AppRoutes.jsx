import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Home" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
