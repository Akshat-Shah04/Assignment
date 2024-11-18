import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Task6LoginModal = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        status: ''
    });
    const [data, setData] = useState([]);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3000/users");
                setData(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const loggedInUser = data.find(
            (userData) => userData.email === user.email && userData.password === user.password
        );

        if (loggedInUser) {
            alert("Login Successful!");
            setUser({
                email: '',
                password: '',
                name: '',
            });
            handleClose();
        } else {
            alert("Invalid email or password. Please try again.");
        }
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = {
                ...user,
                id: new Date().getTime().toString(),
                status: 'active',
            };
            await axios.post("http://localhost:3000/users", newUser);
            alert("User Registered Successfully");
            setUser({
                email: '',
                password: '',
                name: '',
                status: '',
            });
            setShowSignUp(false);
        } catch (error) {
            console.error("Error during sign-up:", error);
        }
    };

    const handleClose = () => {
        setShowLogin(false);
        setShowSignUp(false);
    };

    return (
        <div className="container my-5">
            <h1 className="py-5 text-center">Login & Sign-Up Modal Task</h1>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={() => setShowLogin(true)}>
                    Log-In
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowSignUp(true)}>
                    Sign-Up
                </button>
            </div>

            {/* Login Modal */}
            {showLogin && (
                <div className="modal show d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Login</h5>
                                <button type="button" className="btn-close" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={user.email}
                                            onChange={handleInputChange}
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
                                            value={user.password}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <button type="button" onClick={handleLoginSubmit} className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Sign-Up Modal */}
            {showSignUp && (
                <div className="modal show d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign-Up</h5>
                                <button type="button" className="btn-close" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSignUpSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={user.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={user.email}
                                            onChange={handleInputChange}
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
                                            value={user.password}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Task6LoginModal;
