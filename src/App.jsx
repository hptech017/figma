import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";

// import "./styles/header.css";
// import "./styles/sidebar.css";
// import "./styles/hero.css";
// import "./styles/product.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Hero />
      <ProductSection />
      <ProductSection />
      <ProductSection />
    </div>
  );
}

export default App;
