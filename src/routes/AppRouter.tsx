import React from "react";
import HomePage from "../views/HomePage";
import AccommodationSheet from "../views/AccommodationSheet";
import AboutPage from "../views/AboutPage";
import NotFoundPage from "../views/NotFoundPage";
import { Routes, Route } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Accommodation/:id" element={<AccommodationSheet />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
};

export default AppRouter;
