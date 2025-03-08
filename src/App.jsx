import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import SideBar1 from "./components/SideBar1";
import Product from "./components/Product";

// import "./styles/header.css";
// import "./styles/sidebar.css";
// import "./styles/hero.css";
// import "./styles/product.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SideBar1 />
      <Product/>
      { /*

  
      <ProductSection />
      <ProductSection />
      <ProductSection /> */}
    </>
   
  );
}

export default App;
