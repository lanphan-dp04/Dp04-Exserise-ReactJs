import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../app/components/footer/Footer";
import Header from "../app/components/header/Header";
import Homepage from "../views/Homepage/HomePage";
import JoinusPage from "../views/JoinUs/JoinusPage";
import MainJoinus from "../views/JoinUs/MainJoinus";
import MainPortfolio from "../views/PortfolioPage/MainPortfolio";
import DigitalPage from "../views/STdigital/DigitalPage";
import IncubationPage from "../views/STincubation/IncubationPage";
import SoftwarePage from "../views/STsoftware/SoftwarePage";
import WearePage from "../views/Weare/WearePage";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path="/st-software" element={<SoftwarePage/>} />
        <Route path="/st-digital" element={<DigitalPage/>} />
        <Route path="/st-incubation" element={<IncubationPage/>} />
        <Route path="/who-we-are" element={<WearePage/>} />
        <Route path="/portfolio" element={<MainPortfolio/>} />
        <Route path="/join-us" element={<MainJoinus/>} />
        <Route path="/lets-talk" element={<JoinusPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
