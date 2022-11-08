import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import imageReM from "./assets/rick-and-morty.webp";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Banner
        title="Rick and Morty"
        description="An animated series that follows the exploits of a super scientist and his not-so-bright grandson."
        image={imageReM}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<div>Episodes</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
