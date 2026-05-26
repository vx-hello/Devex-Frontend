import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="section">

        {/* ================= HEADER ================= */}
        <div className="about-header">

          <span className="about-badge">ABOUT DEVEX</span>

          <h1>
            Building <span>Modern</span> Digital Solutions
          </h1>

          <p>
            Devex is a modern web development company focused on building
            scalable, high-performance digital products for startups and
            businesses worldwide. We combine design, technology, and strategy
            to deliver impactful digital experiences.
          </p>

        </div>

        {/* ================= MAIN SECTION ================= */}
        <div className="about-main">

          {/* ================= LEFT ================= */}
          <div className="about-left">

            <h2>We Turn Ideas Into Powerful Products</h2>

            <p>
              At Devex, we believe that technology should empower businesses,
              not complicate them. Our team builds clean, scalable, and efficient
              systems that deliver real-world impact and measurable results.
            </p>

            <p>
              From intuitive frontend interfaces to secure backend systems, we
              design and develop complete solutions that are fast, reliable,
              and easy to maintain.
            </p>

            <p>
              Our approach combines modern technologies, best practices, and a
              deep understanding of business needs to deliver products that help
              our clients grow and succeed.
            </p>

            <p>
              Whether it's a startup MVP or a full enterprise platform, every
              solution we build is crafted with precision, performance, and
              scalability in mind.
            </p>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="about-right">

            <div className="about-box">
              <h3>⚡ Fast Development</h3>
              <p>
                Rapid delivery using modern frameworks and optimized workflows
                without compromising on quality.
              </p>
            </div>

            <div className="about-box">
              <h3>🎯 Clean UI/UX</h3>
              <p>
                Simple, intuitive, and user-friendly interfaces that enhance
                engagement and usability.
              </p>
            </div>

            <div className="about-box">
              <h3>🔒 Secure Systems</h3>
              <p>
                Strong security practices to ensure your data and applications
                remain safe and reliable.
              </p>
            </div>

            <div className="about-box">
              <h3>📈 Scalable Architecture</h3>
              <p>
                Systems designed to grow with your business and handle
                increasing traffic seamlessly.
              </p>
            </div>

          </div>

        </div>

        {/* ================= VALUES SECTION ================= */}
        <div className="about-values">

          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>
              Principles that guide our work and define our approach to building
              digital products.
            </p>
          </div>

          <div className="values-grid">

            <div className="value-card">
              <h3>Client First</h3>
              <p>
                We prioritize client goals and focus on delivering real,
                measurable value in every project.
              </p>
            </div>

            <div className="value-card">
              <h3>Modern Technology</h3>
              <p>
                Using the latest tools and frameworks to build efficient and
                future-ready applications.
              </p>
            </div>

            <div className="value-card">
              <h3>Quality Focus</h3>
              <p>
                Attention to detail and performance ensures every product meets
                high standards.
              </p>
            </div>

            <div className="value-card">
              <h3>Continuous Support</h3>
              <p>
                Ongoing improvements and support even after project delivery.
              </p>
            </div>

          </div>

        </div>

        {/* ================= CTA ================= */}
        <div className="about-cta">

          <h2>Let’s Build Something Great Together</h2>

          <p>
            Have an idea or project in mind? Let’s turn it into a powerful,
            scalable digital solution that delivers real results.
          </p>

          <div className="cta-buttons">

            <Link to="/contact">
              <button className="btn-primary">
                Contact Us
              </button>
            </Link>

            <Link to="/services">
              <button className="btn-outline">
                View Services
              </button>
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}