import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../features/crudSlice';
import Navbar from './Navbar';
import { toast } from 'react-toastify';

function Update() {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const packdata = location.state?.packdata
    const [data, setUpdateData] = useState({});
    useEffect(() => {
        if (packdata) {
            setUpdateData({
                name: packdata.name,
                email: packdata.email,
                password: packdata.password,
                gender: packdata.gender,
                phone: packdata.phone,
            });
        }
    }, [packdata]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updatedData = { ...data, id: packdata.id }; 
            await dispatch(updateUser(updatedData)).unwrap();
            navigate('/');
            toast.success("User updated successfully!");
        } catch (error) {
            toast.error("Error updating user: " + error);
        }
    };


    return (
        <div>
            <Navbar />
            <div className="container">
                <form
                    className="border border-3 border-warning py-3 px-5 mx-auto my-5"
                    onSubmit={handleUpdate}
                >
                    <h2 className="my-4">Update Data</h2>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            name="name"
                            value={data.name || ''}
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
                            value={data.email || ''}
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
                            value={data.phone || ''}
                            onChange={handleChange}
                            placeholder="Enter your phone"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            name="password"
                            value={data.password || ''}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            type="password"
                            className="form-control"
                        />
                    </div>
                    <div>
                        <div className="mb-3">
                            <input
                                value="male"
                                onChange={handleChange}
                                checked={data.gender === 'male'}
                                name="gender"
                                className="form-check-input me-4"
                                type="radio"
                            />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="mb-3">
                            <input
                                value="female"
                                onChange={handleChange}
                                checked={data.gender === 'female'}
                                name="gender"
                                className="form-check-input me-4"
                                type="radio"
                            />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger px-4 py-2">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Update;
