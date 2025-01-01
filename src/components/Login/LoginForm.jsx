import React from "react";

const LoginForm = ({ onSubmit, error }) => {
  return (
    <form onSubmit={onSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">Login</button>
    </form>
  );
};

export default LoginForm;