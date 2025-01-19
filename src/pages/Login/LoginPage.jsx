import React, { useState } from "react";
import Cookies from "js-cookie";
import LoginForm from "../../components/Login/LoginForm";
import "./LoginPage.css";
import LogoRecycle from "../../assets/recycleImage.png";
import LogoEwhale from "../../assets/logo1.png";

const LoginPage = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("https://admin-api.ewhale.my.id/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        Cookies.set("session_id", data.session_id);
        window.location.href = "https://admin.ewhale.my.id/login";
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Server is busy right now, please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="left-box">
          <img src={LogoRecycle} alt="Recycle" className="recycle-image" />
          <h2>Masuk sekarang dan mulai perjalananmu sebagai kurir sampah elektronik!</h2>
          <p>Kelola sampah elektronik dan ciptakan lingkungan bersih!</p>
        </div>
        <div className="right-box">
          <img src={LogoEwhale} alt="Ewhale Logo" className="logo-image" />
          <h3>Masuk</h3>
          <p className="mb-3">Masuk untuk mengakses akun Anda</p>
          <LoginForm onSubmit={handleSubmit} error={error} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;