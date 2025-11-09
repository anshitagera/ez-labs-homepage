import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Welcome to EZ Labs</h1>
        <p className="hero-sub">
          We create digital experiences that inspire and connect.
        </p>
      </div>

      <div className="thumbnail-row">
        <div className="thumb">Hero</div>
        <div className="thumb">About</div>
        <div className="thumb">Team</div>
        <div className="thumb">Portfolio</div>
        <div className="thumb">Contact</div>
      </div>
    </section>
  );
}
