import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import "./styles/styles.css";

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="logo">EZ Labs</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="container">
        <Hero />
        <Services />
        <ContactForm />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} EZ Labs — Built by Anshita
      </footer>
    </div>
  );
}
