import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const redirect = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (localStorage.getItem("User-Id")) {
            redirect("/");
        }
    }, [redirect]);

    const getChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const resetForm = () => {
        setData({
            email: "",
            password: "",
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = data;

        if (!email.trim() || !password.trim()) {
            toast.error("Please enter all the details!");
            return;
        }

        try {
            const res = await axios.get(`http://localhost:3000/users?email=${email}`);
            if (res.data.length === 0) {
                toast.error("Email does not exist!");
                return;
            }

            const user = res.data[0];
            if (user.password !== password) {
                toast.error("Invalid password!");
                return;
            }

            if (user.status === "block") {
                toast.error("Your account is currently blocked!");
                toast.info("Please contact the company to unblock your account.");
                return;
            }

            localStorage.setItem("User-Id", user.id);
            localStorage.setItem("User-Name", user.name);
            localStorage.setItem("Account-Status", user.status);
            toast.success("User Login Successful!");
            resetForm(); // Clear form fields after login
            redirect("/index");
        } catch (error) {
            toast.error("Error logging in");
            console.log("Error Caught {catch} => ", error);
        }
    };
    // For Testing purpos only:
    // email: user3@gmail.com 
    // pwd: 12345
    return (
        <div>
            <Navbar />
            <div className="container">
                <form className="p-5 bg-light text-dark text-start border border-2 border-danger my-5">
                    <div className="mb-3">
                        <h1 className="text-danger">Login Page</h1>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            onChange={getChange}
                            name="email"
                            value={data.email}
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={getChange}
                            value={data.password}
                            className="form-control"
                            id="password"
                        />
                    </div>

                    <button type="button" onClick={handleLogin} className="btn btn-outline-danger px-5 py-1">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
