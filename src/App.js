import React from "react";
import "./App.scss";
//Components
import Breadcrumb from "./components/Breadcrumb";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Product />
    </>
  );
}

export default App;
