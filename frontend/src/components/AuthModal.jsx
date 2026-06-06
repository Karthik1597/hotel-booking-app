import React, { useState } from "react";
import "../styles/AuthModal.css";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-overlay">
      <div className="auth-box">

        {/* CLOSE BUTTON */}
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        {/* TITLE */}
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {/* FORM */}
        <form>

          {!isLogin && (
            <input type="text" placeholder="Username" />
          )}

          <input type="email" placeholder="Email" />

          <input type="password" placeholder="Password" />

          <button type="submit">
            {isLogin ? "Login" : "Create Account"}
          </button>

        </form>

        {/* SWITCH */}
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