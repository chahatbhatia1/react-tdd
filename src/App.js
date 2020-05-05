import React from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/navbar/NavBar";


library.add(faShoppingCart);


function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;