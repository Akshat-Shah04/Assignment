import React, { useState } from 'react'
import { createUser } from '../features/crudSlice';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { toast } from 'react-toastify';

function Create() {

    const [users, setUsers] = useState({})

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUsers({
            ...users,
            id: new Date().getTime().toString()
            , [e.target.name]: e.target.value
        });
        console.log(users)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Users...", users)
        dispatch(createUser(users))
        toast.success("User Created Successfully")
        setUsers('')
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <form className="w-100 py-5 border border-dark border-3 px-5 my-5" onSubmit={handleSubmit}>
                    <h2 className="my-2">Fill The data</h2>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            name="name"
                            onChange={handleChange}
                            placeholder="Enter your name"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            name="email"
                            onChange={handleChange}
                            placeholder="Enter your email"
                            type="email"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                            name="phone"
                            onChange={handleChange}
                            placeholder="Enter your Age"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter your Password"
                            type="password"
                            className="form-control"
                        />
                    </div>
                    <div>
                        <div className="mb-3">
                            <input
                                value="male"
                                onChange={handleChange}
                                name="gender"
                                className="border-dark form-check-input me-4"
                                type="radio"
                            />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="mb-3">
                            <input
                                value="female"
                                onChange={handleChange}
                                name="gender"
                                className="border-dark form-check-input me-4"
                                type="radio"
                            />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Create