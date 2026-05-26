import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {

  /* ================= STATE ================= */
  const [showPassword, setShowPassword] = useState(false);

  /* ================= HANDLERS ================= */
  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 future: API call yaha hoga
    console.log("Register submitted");
  };

  return (
    <div className="auth-wrapper">

      <div className="auth-box">

        {/* ================= LEFT SIDE ================= */}
        <div className="auth-left">

          <h1 className="auth-logo">DEVEX</h1>

          <p className="auth-desc">
            Create your account and start building powerful digital products
            with modern tools and technologies. Join us and take your ideas
            to the next level.
          </p>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="auth-right">

          <div className="auth-header">
            <h2>Create Account</h2>
            <p>Sign up and start your journey with Devex</p>
          </div>

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="auth-form">

            {/* NAME */}
            <div className="input-box">
              <input
                type="text"
                name="name"
                required
                autoComplete="off"
              />
              <label>Full Name</label>
            </div>

            {/* EMAIL */}
            <div className="input-box">
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
              />
              <label>Email Address</label>
            </div>

            {/* PASSWORD */}
            <div className="input-box password-box">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
              />
              <label>Password</label>

              <span
                className="toggle-password"
                onClick={togglePassword}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="input-box password-box">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                required
              />
              <label>Confirm Password</label>
            </div>

            {/* TERMS */}
            <div className="auth-row">
              <label className="terms-check">
                <input type="checkbox" required />
                <span>I agree to Terms & Conditions</span>
              </label>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="login-btn"
            >
              Create Account
            </button>

          </form>

          {/* FOOTER */}
          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}