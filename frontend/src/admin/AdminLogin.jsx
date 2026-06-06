import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // simple admin auth (we upgrade later with backend JWT)
    if (username === "admin" && password === "admin123") {
      setSuccess("Login successful... Redirecting to dashboard");

      localStorage.setItem("adminAuth", "true");

      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="admin-login-container">

      <div className="admin-login-box">

        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        {/* INLINE MESSAGES */}
        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}

      </div>

    </div>
  );
};

export default AdminLogin;