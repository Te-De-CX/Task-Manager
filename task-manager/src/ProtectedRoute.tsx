import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "./api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "./constant";
import { useState, useEffect, ReactNode } from "react";

// Define the shape of the props for ProtectedRoute
interface ProtectedRouteProps {
    children: ReactNode; // The children to render if authorized
}

// Define the shape of the decoded token
interface DecodedToken {
    exp: number; // Expiration timestamp
    [key: string]: any; // Allow other properties
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    }, []);

    // Function to refresh the access token
    const refreshToken = async (): Promise<void> => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        if (!refreshToken) {
            setIsAuthorized(false);
            return;
        }

        try {
            const res = await api.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.error("Token refresh failed:", error);
            setIsAuthorized(false);
        }
    };

    // Function to check if the user is authorized
    const auth = async (): Promise<void> => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }

        try {
            const decoded: DecodedToken = jwtDecode(token);
            const tokenExpiration = decoded.exp;
            const now = Date.now() / 1000;

            if (tokenExpiration < now) {
                await refreshToken();
            } else {
                setIsAuthorized(true);
            }
        } catch (error) {
            console.error("Token decoding failed:", error);
            setIsAuthorized(false);
        }
    };

    // Show a loading state while checking authorization
    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }

    // Redirect to login if not authorized, otherwise render children
    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;