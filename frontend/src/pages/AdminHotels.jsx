import React, { useEffect, useState } from "react";
import "../styles/AdminHotels.css";

const AdminHotels = () => {
  const [hotels, setHotels] = useState([]);

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
        }
      );

      fetchHotels(); // refresh
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-hotels">

      <h2>Manage Hotels (CRUD)</h2>

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

    </div>
  );
};

export default AdminHotels;