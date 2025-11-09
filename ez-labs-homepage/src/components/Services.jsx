import React from "react";

const services = [
  { id: 1, title: "Web Design" },
  { id: 2, title: "App Development" },
  { id: 3, title: "Brand Strategy" },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.id} className="service-card">
            <div className="service-img">Img</div>
            <div className="service-title">{s.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
