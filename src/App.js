import React from 'react';
import './App.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/navbar/Navbar";


library.add(faShoppingCart);


function App() {
  return (
    <>
      <Navbar itemTotal = {0}/>
    </>
  );
}

export default App;