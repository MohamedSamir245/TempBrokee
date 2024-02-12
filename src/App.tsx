import React from "react";
import "./App.css";
import TestOfferings from "./components/TestOfferings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from "./components/Features";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Banner />
      <Features />
      <TestOfferings />;
    </>
  );
}

export default App;
