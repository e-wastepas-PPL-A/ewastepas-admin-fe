import React, { useState } from "react";
import Cookies from 'js-cookie';
import LoginForm from "../../components/Login/LoginForm";

const LoginPage = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Simpan session_id ke cookie
        Cookies.set("session_id", data.session_id);

        // Redirect ke halaman utama
        window.location.href = "http://localhost:5173/";
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Server is busy right now, please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="text-center mb-4">Login</h3>
          <LoginForm onSubmit={handleSubmit} error={error} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;