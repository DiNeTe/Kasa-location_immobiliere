import { Routes, Route } from "react-router-dom";

import HomePage from "../views/HomePage";
import AccommodationPage from "../views/AccommodationPage";
import AboutPage from "../views/AboutPage";
import NotFoundPage from "../views/NotFoundPage";

// composant fonctionnel React
const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/accommodation/:id" element={<AccommodationPage/>} />{" "}
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="/accommodation/not-found" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRouter;
