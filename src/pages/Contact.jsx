import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {

  /* ================= STATE ================= */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: ""
  });

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /* ================= HANDLE SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    // 👉 future API call yaha hoga

    alert("Message sent successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="section contact-page">

        {/* ================= HEADER ================= */}
        <div className="contact-header">

          <span className="contact-badge">CONTACT</span>

          <h1>Let’s Talk About Your Project</h1>

          <p>
            Every great project begins with a conversation. Share your idea 
            with us and we’ll help you turn it into a scalable and impactful 
            digital solution.
          </p>

        </div>

        {/* ================= MAIN SECTION ================= */}
        <div className="contact-container">

          {/* ================= LEFT ================= */}
          <div className="contact-info">

            <h2>Get in Touch</h2>

            <p>
              We collaborate with startups and businesses to build modern,
              scalable digital products. Our team ensures quick responses
              and smooth communication throughout the entire journey.
            </p>

            <div className="info-box">
              <h4>📧 Email Address</h4>
              <span>devex@gmail.com</span>
            </div>

            <div className="info-box">
              <h4>📞 Phone Number</h4>
              <span>+91 9876543210</span>
            </div>

            <div className="info-box">
              <h4>📍 Office Location</h4>
              <span>India</span>
            </div>

            <div className="info-box">
              <h4>⏰ Working Hours</h4>
              <span>Mon - Sat, 10:00 AM - 7:00 PM</span>
            </div>

          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="contact-form-box">

            <div className="form-header">
              <h2>Send a Message</h2>
              <p>We’ll get back to you within 24 hours.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>

              {/* ROW 1 */}
              <div className="row">

                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              {/* ROW 2 */}
              <div className="row">

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Optional"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

              </div>

              {/* MESSAGE */}
              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  placeholder="Describe your project..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* BUTTON */}
              <button type="submit" className="btn-primary">
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* ================= CTA ================= */}
        <div className="cta-section">

          <h2>Ready to Start Your Project?</h2>

          <p>
            Let’s build something amazing together. Explore our services
            and take the first step today.
          </p>

          <div className="cta-buttons">

            <Link to="/services">
              <button className="btn-primary">
                Get Started
              </button>
            </Link>

            <Link to="/about">
              <button className="btn-outline">
                Learn More
              </button>
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}