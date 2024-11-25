import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { deleteUser, showUser } from "../features/crudSlice";
import { toast } from "react-toastify";
import Navbar from "./Navbar";

function Read() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users, loading } = useSelector((state) => state.crudApp);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        dispatch(showUser());
    }, [dispatch]);

    useEffect(() => {
        if (searchQuery) {
            setFilteredUsers(
                users.filter((user) =>
                    Object.values(user)
                        .join(" ")
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredUsers(users);
        }
    }, [searchQuery, users]);

    const deleteFunc = async (id) => {
        try {
            await dispatch(deleteUser(id)).unwrap();
            toast.success("Record Deleted...");
        } catch (error) {
            toast.error("Error deleting record: " + error.message);
        }
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    const handleEdit = (data) => {
        navigate("/update", { state: { packdata: data } });
    };
    
    return (
        <div>
            <Navbar />
            <div className="container my-5">
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Person"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers &&
                            filteredUsers.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.phone}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger me-1"
                                                onClick={() => deleteFunc(data.id)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="btn btn-warning mx-2"
                                                onClick={() => handleEdit(data)}
                                            >
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Read;
