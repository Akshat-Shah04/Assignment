import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Index = () => {
    const redirect = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("User-Id") && !localStorage.getItem("User-Name")) {
            redirect("/public-index")
            alert("Log In before accessing website")
        }
    }, [redirect])
    return (
        <div>
            <Navbar />
            <h1>{localStorage.getItem("User-Name")}</h1>
            <h1>Hello Welcome to Home Page</h1>
        </div>
    )
}

export default Index
