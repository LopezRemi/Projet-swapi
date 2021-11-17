import Header from './Component/Header';
import Footer from './Component/Footer';
import Accueil from './Component/Accueil';
import Recherche from './Component/Recherche';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';


function App(){
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="Recherche" element={<Recherche />} />
      </Routes>
      <Footer />
    </div>
  );
}




export default App;
