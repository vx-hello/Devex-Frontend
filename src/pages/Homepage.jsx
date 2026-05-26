import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="hero section">

        <div className="hero-left">

          <span className="badge">
            DEVEX SOLUTIONS
          </span>

          <h1>
            Build <span>Modern</span><br />
            Digital Products
          </h1>

          <p>
            We build scalable, high-performance web applications
            with clean UI and modern technologies that help your
            business grow faster.
          </p>

          <div className="hero-buttons">

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

          {/* STATS */}
          <div className="hero-stats">

            <div className="stat">
              <h3>50+</h3>
              <p>Projects Delivered</p>
            </div>

            <div className="stat">
              <h3>10+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="stat">
              <h3>100%</h3>
              <p>Success Rate</p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-box"></div>
        </div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="section">

        <div className="section-header">
          <h2>Why Choose Devex</h2>
          <p>
            We deliver high-quality solutions using modern technologies,
            clean design, and scalable architecture.
          </p>
        </div>

        <div className="cards">

          <div className="card">
            <h3>Fast Development</h3>
            <p>Quick delivery using optimized workflows.</p>
          </div>

          <div className="card">
            <h3>Clean UI/UX</h3>
            <p>Simple and intuitive user-friendly interfaces.</p>
          </div>

          <div className="card">
            <h3>Scalable Systems</h3>
            <p>Applications built to grow with your business.</p>
          </div>

          <div className="card">
            <h3>Secure Apps</h3>
            <p>Strong security practices for safe applications.</p>
          </div>

          <div className="card">
            <h3>Modern Tech</h3>
            <p>Using latest frameworks and technologies.</p>
          </div>

          <div className="card">
            <h3>Reliable Support</h3>
            <p>Continuous support and improvements.</p>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">

        <h2>Let’s Build Something Amazing</h2>

        <p>
          Start your project today and take your business to the next level.
        </p>

        <Link to="/contact">
          <button className="btn-primary">
            Contact Now
          </button>
        </Link>

      </section>

    </div>
  );
}