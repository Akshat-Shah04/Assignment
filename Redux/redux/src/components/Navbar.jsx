import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
    const redirect = useNavigate();
    if (!localStorage.getItem("Email-Id")) {
        toast.error("Please Log-In to continue")
        redirect('/login')
    }

    const handleLogout = () => {
        localStorage.removeItem("Email-Id")
        toast.success("User Logged Out...")
        redirect("/login")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-brand fs-3 text-primary">CRUD-PROG</div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto px-4 gap-5 text-dark fs-4 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Read
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/create">
                                    Create
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/update">
                                    Update
                                </NavLink>
                            </li>
                        </ul>
                        <button className="btn btn-danger" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
