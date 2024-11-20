import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Navbar = () => {
    const redirect = useNavigate();
    const [show, setShow] = useState(false)
    const [showNew, setNewShow] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("User-Id") && localStorage.getItem("User-Name")) {
            redirect("/index")
            setShow(true)
            toast.success("Already Logged In")
        }
        else {
            setNewShow(true)
        }
    }, [redirect])
    const handleLogout = () => {
        try {
            localStorage.removeItem("User-Id")
            localStorage.removeItem("User-Name")
            localStorage.removeItem("Account-Status")
            redirect('/login')
        } catch (error) {
            console.log("error : : :", error);
        }
    }

    function handleLogIn() {
        redirect("/login")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {show && (

                        <NavLink className="navbar-brand" to="/index">Navbar</NavLink>
                    )}

                    {showNew && (
                        <NavLink className="navbar-brand" to="/public-index">Navbar</NavLink>
                    )}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            {
                                show && (
                                    <button onClick={handleLogout} className="btn btn-outline-danger" type="button">Logout</button>
                                )
                            }
                            {
                                showNew && (
                                    <button onClick={handleLogIn} className="btn btn-outline-primary" type="button">LogIn</button>

                                )
                            }
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
