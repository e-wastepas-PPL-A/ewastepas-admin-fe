import React, { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const LoginForm = ({ onSubmit, error }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <form onSubmit={onSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email :
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Masukkan email Anda"
          required
          className={`
            form-control peer block w-full rounded border px-3 mt-5 py-[0.50rem] outline-none transition-all 
            duration-200 ease-linear min-h-[auto]
            border-gray-300
            focus:placeholder:opacity-100 peer-focus:text-gray-800
            motion-reduce:transition-none
          `}
        />
      </div>

      <div className="mb-3 relative">
        <label htmlFor="password" className="form-label">
          Kata Sandi :
        </label>
        <div className="relative">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Masukkan kata sandi Anda"
            required
            className={`
              form-control block w-full rounded border px-3 py-[0.50rem] outline-none transition-all mt-5
              duration-200 ease-linear min-h-[auto]
              border-gray-300
              focus:placeholder:opacity-100 peer-focus:ring-2 peer-focus:ring-primary
              motion-reduce:transition-none
            `}
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <IoIosEyeOff size={24} /> : <IoMdEye size={24} />}
          </button>
        </div>
      </div>

      <div className="my-3 flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            className="form-checkbox text-blue-600"
          />
          <label
            htmlFor="rememberMe"
            className="text-sm xl:text-base ml-3 text-gray-700 text-md"
          >
            Ingatkan saya
          </label>
        </div>
        <a href="#" className="text-sm xl:text-base text-red-500 text-md">
          Lupa kata sandi
        </a>
      </div>

      <button
        type="submit"
        className="text-sm xl:text-base w-full font-semibold py-2 px-4 rounded"
        style={{ backgroundColor: "#005B96", color: "#FFFFFF" }}
      >
        Masuk
      </button>

      <div className="text-sm xl:text-base text-center mt-2">
        <p>
          Anda sudah memiliki akun?{" "}
          <a href="#" className="text-red-500">
            Registrasi
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
