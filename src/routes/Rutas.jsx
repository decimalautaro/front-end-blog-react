import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../components/pages/Home"
import { Articles } from "../components/pages/Articles"
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Footer } from "../components/layout/Footer";


export const Rutas = () => {
  return (
    <BrowserRouter>

      <Header/>
      <Nav />
        <section id="content" className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/articles" element={<Articles/>} />



                
            </Routes>

        </section>
        <Sidebar/>
        <Footer/>
    
    
    </BrowserRouter>
  )
}
