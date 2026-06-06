import React, { useState } from "react";
import "../styles/AddRoom.css";

const AddRoom = () => {
  const [form, setForm] = useState({
    name: "",
    city: "",
    price: "",
    rating: "",
    image: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://hotel-booking-api-8ysd.onrender.com/api/hotels",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        setMessage("Room added successfully!");
        setForm({
          name: "",
          city: "",
          price: "",
          rating: "",
          image: "",
        });
      } else {
        setMessage("Failed to add room");
      }
    } catch (error) {
      console.log(error);
      setMessage("Server error");
    }
  };

  return (
    <div className="addroom-container">

      <h2>Add New Room</h2>

      <form onSubmit={handleSubmit} className="addroom-form">

        <input
          type="text"
          name="name"
          placeholder="Hotel Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City (kl, penang, johor, langkawi)"
          value={form.city}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="rating"
          placeholder="Rating"
          value={form.rating}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Room</button>

        {message && <p className="msg">{message}</p>}

      </form>

    </div>
  );
};

export default AddRoom;