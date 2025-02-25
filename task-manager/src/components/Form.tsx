import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constant";
import LoadingIndicator from "./LoadingIndicator";
import axios from "axios";

// Define the shape of the props for the Form component
interface FormProps {
    route: string; // API endpoint for login or register
    method: "login" | "register"; // Determines if it's a login or register form
}

function Form({ route, method }: FormProps) {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Prepare the request data based on the method
            const requestData = method === "login" ? { username, password } : { username, password, email };

            const res = await api.post(route, requestData);
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/"); // Redirect to home page after login
            } else {
                navigate("/login"); // Redirect to login page after registration
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Log the detailed error response from the backend
                console.error("Backend error:", error.response?.data);
                alert(error.response?.data?.detail || "An error occurred. Please try again.");
            } else {
                console.error("Unexpected error:", error);
                alert("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            {method === "register" && (
                <input
                    className="form-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            )}
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit" disabled={loading}>
                {name}
            </button>
        </form>
    );
}

export default Form;