import React, { useState } from "react";
import "../styles/AuthModal.css";
import { toast } from "react-toastify";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isLogin
        ? "https://hotel-booking-api-8ysd.onrender.com/api/auth/login"
        : "https://hotel-booking-api-8ysd.onrender.com/api/auth/signup";

      const body = isLogin
        ? { email, password }
        : { username, email, password };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      // ❌ ERROR CASE
      if (!response.ok) {
        toast.error(data.message || "Something went wrong ❌");
        return;
      }

      // ✅ SUCCESS CASE
      if (isLogin) {
        toast.success(data.message || "Login successful ✅");

        localStorage.setItem("user", JSON.stringify(data.user));

        onClose();
      } else {
        toast.success(data.message || "Account created successfully ✅");

        setIsLogin(true);
        setUsername("");
        setEmail("");
        setPassword("");
      }

    } catch (error) {
      console.log(error);
      toast.error("Server error ❌");
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-box">

        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            {isLogin ? "Login" : "Create Account"}
          </button>

        </form>

        <p>
          {isLogin ? "New user?" : "Already have account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default AuthModal;