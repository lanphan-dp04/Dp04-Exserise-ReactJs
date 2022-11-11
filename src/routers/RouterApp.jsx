import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../app/components/footer/Footer";
import Header from "../app/components/header/Header";
import { dataCommonBanner } from "../app/config/config.Api";
import Homepage from "../views/Homepage/HomePage";
import JoinusPage from "../views/JoinUs/JoinusPage";
import MainJoinus from "../views/JoinUs/MainJoinus";
import LesttaskPage from "../views/LetsTalk/LesttaskPage";
import MainPortfolio from "../views/PortfolioPage/MainPortfolio";
import PortfolioPage from "../views/PortfolioPage/PortfolioPage";
import DigitalPage from "../views/STdigital/DigitalPage";
import IncubationPage from "../views/STincubation/IncubationPage";
import SoftwarePage from "../views/STsoftware/SoftwarePage";
import WearePage from "../views/Weare/WearePage";

function RouterApp() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path="/st-software" element={<SoftwarePage />} />
        <Route path="/st-digital" element={<DigitalPage/>} />
        <Route path="/st-incubation" element={<IncubationPage/>} />
        <Route path="/who-we-are" element={<WearePage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/join-us" element={<JoinusPage/>} />
        <Route path="/lets-talk" element={<LesttaskPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default RouterApp;
