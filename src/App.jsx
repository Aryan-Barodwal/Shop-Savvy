import React from "react";
import Navbar from "./components/Navbar";
import Crosel from "./components/Crosel";
import Items from "./components/Items";
import Footerr from "./components/Footerr";
import Product from "./components/Products"

import { Toaster } from "react-hot-toast";

import "./App.css";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Product/>
      <Crosel />
      <Items />
      <Footerr />
    
    </>
  );
}

export default App;
