import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const redirect = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = user;

        // Validate input fields
        if (!email.trim() || !password.trim()) {
            toast.error("Email and password are required.");
            return;
        }
        try {
            // Fetch admin credentials from backend
            const res = await axios.get("http://localhost:3000/admin");
            const admin = res.data.find(
                (admin) => admin.email === email && admin.password === password
            );

            if (admin) {
                toast.success("Login successful!");
                console.log("Admin logged in:", admin);
                localStorage.setItem("Email-Id", email);
                redirect('/')

            } else {
                toast.error("Invalid email or password.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleInputChange}
                    required
                    className="form-control mb-3"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleInputChange}
                    required
                    className="form-control mb-3"
                />
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
