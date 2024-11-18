import axios from "axios";
import React, { useEffect, useState } from "react";

const Task4 = () => {
    const [item, setItem] = useState([]);
    const [data, setData] = useState({
        name: "",
        quantity: "",
        isPurchased: "",
    });
    const [show, setShow] = useState(false);
    const [selection, setSelection] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/items");
            setItem(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (selection) {
            setSelection({ ...selection, [name]: value });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const addItems = async (e) => {
        e.preventDefault();
        try {
            const newItem = { ...data, id: new Date().getTime().toString() };
            await axios.post("http://localhost:3000/items", newItem);
            fetchData();
            setData({ name: "", quantity: "", isPurchased: "" });
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/items/${id}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const editItem = (item) => {
        setSelection(item);
        setShow(true);
    };

    const closeModal = () => {
        setSelection(null);
        setShow(false);
    };

    const updateItem = async (e) => {
        e.preventDefault();
        if (selection) {
            try {
                await axios.put(`http://localhost:3000/items/${selection.id}`, selection);
                fetchData();
                closeModal();
            } catch (error) {
                console.error("Error updating item:", error);
            }
        }
    };

    return (
        <div>
            <div className="container-fluid my-5 row">
                <div className="container col-md-12">
                    <h1 className="text-center fs-1 mb-4">Grocery List</h1>
                    <table className="table table-striped table-hover table-dark">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Item Quantity</th>
                                <th>Item Purchased</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item.map((res) => (
                                <tr key={res.id}>
                                    <td>{res.name}</td>
                                    <td>{res.quantity}</td>
                                    <td>{res.isPurchased}</td>
                                    <td>
                                        <button
                                            className="me-2 btn btn-outline-danger"
                                            onClick={() => deleteItem(res.id)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-outline-warning"
                                            onClick={() => editItem(res)}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <form className="bg-dark py-5 px-5 mt-5" onSubmit={addItems}>
                        <h1 className="text-white mb-5">Add Item To The List</h1>
                        <div className="mb-3">
                            <label className="text-white form-label">Item Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="text-white form-label">Item Quantity</label>
                            <input
                                type="number"
                                className="form-control"
                                name="quantity"
                                value={data.quantity}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="text-white form-label">Item Purchased</label>
                            <select
                                className="form-select"
                                name="isPurchased"
                                value={data.isPurchased}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-outline-warning">Submit</button>
                    </form>
                </div>
            </div>

            {show && selection && (
                <div className="modal show d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Item</h5>
                                <button
                                    className="btn-close"
                                    onClick={closeModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={updateItem}>
                                    <div className="mb-3">
                                        <label className="form-label">Item Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={selection.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Item Quantity</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="quantity"
                                            value={selection.quantity}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Item Purchased</label>
                                        <select
                                            className="form-select"
                                            name="isPurchased"
                                            value={selection.isPurchased}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Task4;
