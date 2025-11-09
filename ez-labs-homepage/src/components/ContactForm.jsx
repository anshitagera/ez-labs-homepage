import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const API_URL = import.meta.env.VITE_CONTACT_API;

  // Validation function
  const validate = (values) => {
    const err = {};
    if (!values.name.trim()) err.name = "Name is required";
    if (!values.email.trim()) err.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      err.email = "Invalid email format";
    if (!values.message.trim()) err.message = "Message cannot be empty";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("Sending...");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        const errorText = await response.text();
        setStatus(`❌ Failed: ${errorText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Network error or CORS issue");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </label>

        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </label>

        <label>
          Message
          <textarea
            rows="6"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {errors.message && <small className="error">{errors.message}</small>}
        </label>

        <button type="submit">Send Message</button>
        {status && <p style={{ marginTop: "10px", color: "#ff6b2d" }}>{status}</p>}
      </form>
    </section>
  );
}
