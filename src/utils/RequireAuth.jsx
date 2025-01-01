import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';

const RequireAuth = ({ children }) => {
    const sessionId = Cookies.get("session_id"); // Ambil session_id dari cookie

    if (!sessionId) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default RequireAuth;