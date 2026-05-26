import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  /* ================= STATE ================= */
  const [showPassword, setShowPassword] = useState(false);

  /* ================= NAVIGATION ================= */
  const navigate = useNavigate();

  /* ================= FORM HANDLER ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 future: API call yaha hoga
    console.log("Login submitted");

    // redirect after login
    navigate("/");
  };

  /* ================= TOGGLE PASSWORD ================= */
  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="auth-wrapper">

      <div className="auth-box">

        {/* ================= LEFT SIDE ================= */}
        <div className="auth-left">

          <h1 className="auth-logo">DEVEX</h1>

          <p className="auth-desc">
            Build modern, scalable and powerful web applications with ease.
            Join us and take your ideas to the next level with clean and
            efficient digital solutions.
          </p>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="auth-right">

          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Sign in to continue to your account</p>
          </div>

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="auth-form">

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

            {/* OPTIONS */}
            <div className="auth-row">

              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="login-btn"
            >
              Sign In
            </button>

          </form>

          {/* FOOTER */}
          <div className="auth-footer">
            <p>
              Don’t have an account?{" "}
              <Link to="/register">Create Account</Link>
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}