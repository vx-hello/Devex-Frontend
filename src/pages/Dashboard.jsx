import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  /* ================= NAVIGATION ================= */
  const navigate = useNavigate();

  /* ================= DATA (SCALABLE) ================= */
  const statsData = [
    { value: "12", label: "Total Projects" },
    { value: "8", label: "Active Projects" },
    { value: "4", label: "Completed" },
    { value: "3", label: "Pending Requests" }
  ];

  const projects = [
    "Portfolio Website",
    "E-commerce Platform",
    "Admin Dashboard",
    "API Integration System",
    "Landing Page Redesign"
  ];

  const analytics = [
    "Visitors: 1200+",
    "Conversions: 320",
    "Bounce Rate: 18%",
    "Growth: +25%",
    "New Users: 150"
  ];

  const activity = [
    "New project created successfully",
    "Client request approved",
    "Dashboard updated with new features",
    "Payment received from client",
    "System performance improved"
  ];

  return (
    <>
      <Navbar />

      <div className="section dashboard-page">

        {/* ================= HEADER ================= */}
        <div className="dashboard-header">

          <span className="dashboard-badge">DASHBOARD</span>

          <h1>Welcome Back 👋</h1>

          <p>
            Manage your projects, monitor analytics, and track recent activities
            from one powerful dashboard. Stay productive and in control of your
            workflow with real-time insights.
          </p>

        </div>

        {/* ================= STATS ================= */}
        <div className="dashboard-stats">

          {statsData.map((item, index) => (
            <div key={index} className="stat-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}

        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="dashboard-grid">

          {/* PROJECTS */}
          <div className="dashboard-card">

            <div className="card-header">
              <h2>Recent Projects</h2>
            </div>

            <ul>
              {projects.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          {/* ANALYTICS */}
          <div className="dashboard-card">

            <div className="card-header">
              <h2>Analytics Overview</h2>
            </div>

            <ul>
              {analytics.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          {/* ACTIVITY */}
          <div className="dashboard-card">

            <div className="card-header">
              <h2>Recent Activity</h2>
            </div>

            <ul>
              {activity.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

        </div>

        {/* ================= CTA ================= */}
        <div className="dashboard-cta">

          <h2>Boost Your Productivity 🚀</h2>

          <p>
            Stay updated with your progress, track performance, and manage your
            workflow efficiently. Explore more tools and features to grow faster.
          </p>

          <div className="cta-buttons">

            <button
              className="btn-primary"
              onClick={() => navigate("/services")}
            >
              View Services
            </button>

            <button
              className="btn-outline"
              onClick={() => navigate("/contact")}
            >
              Contact Support
            </button>

          </div>

        </div>

      </div>
    </>
  );
}