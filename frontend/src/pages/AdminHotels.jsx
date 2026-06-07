import React, { useEffect, useState } from "react";
import "../styles/AdminHotels.css";

const AdminHotels = () => {
    const [hotels, setHotels] = useState([]);
    const [editingHotel, setEditingHotel] = useState(null);

    const [form, setForm] = useState({
        name: "",
        city: "",
        price: "",
        rating: "",
        image: "",
    });

    // FETCH HOTELS
    const fetchHotels = async () => {
        try {
            const res = await fetch(
                "https://hotel-booking-api-8ysd.onrender.com/api/hotels"
            );

            const data = await res.json();
            setHotels(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchHotels();
    }, []);

    // DELETE HOTEL
    const deleteHotel = async (id) => {
        try {
            await fetch(
                `https://hotel-booking-api-8ysd.onrender.com/api/hotels/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: "admin123", // 🔐 permission key
                    },
                }
            );

            fetchHotels();
        } catch (error) {
            console.log(error);
        }
    };

    // CLICK EDIT
    const handleEdit = (hotel) => {
        setEditingHotel(hotel._id);
        setForm(hotel);
    };

    // UPDATE HOTEL
    const updateHotel = async () => {
        try {
            await fetch(
                `https://hotel-booking-api-8ysd.onrender.com/api/hotels/${editingHotel}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                }
            );

            setEditingHotel(null);
            fetchHotels();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="admin-hotels">
            <h2>Manage Hotels (CRUD)</h2>

            {/* TABLE */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {hotels.map((hotel) => (
                        <tr key={hotel._id}>
                            <td>{hotel.name}</td>
                            <td>{hotel.city}</td>
                            <td>RM {hotel.price}</td>

                            <td>
                                <button
                                    className="edit-btn"
                                    onClick={() => handleEdit(hotel)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteHotel(hotel._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* EDIT MODAL */}
            {editingHotel && (
                <div className="modal">
                    <div className="modal-box">
                        <h3>Edit Hotel</h3>

                        <input
                            placeholder="Hotel Name"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                        />

                        <input
                            placeholder="City"
                            value={form.city}
                            onChange={(e) =>
                                setForm({ ...form, city: e.target.value })
                            }
                        />

                        <input
                            placeholder="Price"
                            value={form.price}
                            onChange={(e) =>
                                setForm({ ...form, price: e.target.value })
                            }
                        />

                        <input
                            placeholder="Rating"
                            value={form.rating}
                            onChange={(e) =>
                                setForm({ ...form, rating: e.target.value })
                            }
                        />

                        <input
                            placeholder="Image URL"
                            value={form.image}
                            onChange={(e) =>
                                setForm({ ...form, image: e.target.value })
                            }
                        />

                        <div className="modal-actions">
                            <button className="save-btn" onClick={updateHotel}>
                                Save
                            </button>

                            <button
                                className="cancel-btn"
                                onClick={() => setEditingHotel(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminHotels;