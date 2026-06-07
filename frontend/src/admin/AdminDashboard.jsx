import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(
          "https://hotel-booking-api-8ysd.onrender.com/api/bookings"
        );

        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookings();
  }, []);

  // TOTAL BOOKINGS
  const totalBookings = bookings.length;

  // TOTAL REVENUE
  const totalRevenue = bookings.reduce(
    (acc, item) => acc + (item.totalPrice || 0),
    0
  );

  return (
    <div className="admin-container">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Admin Panel</h2>

        <ul>
          <li onClick={() => navigate("/admin/dashboard")}>
            Dashboard
          </li>

          <li onClick={() => navigate("/admin/add-room")}>
            Add Room
          </li>

          <li onClick={() => navigate("/admin/users")}>
            Users
          </li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        {/* TOP CARDS */}
        <div className="cards">

          <div className="card">
            <h3>Total Bookings</h3>
            <p>{totalBookings}</p>
          </div>

          <div className="card">
            <h3>Total Revenue</h3>
            <p>RM {totalRevenue}</p>
          </div>

        </div>

        {/* RECENT BOOKINGS */}
        <h3>Recent Bookings</h3>

        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Hotel Name</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.slice(0, 5).map((booking) => (
              <tr key={booking._id}>
                <td>{booking.fullName}</td>
                <td>{booking.hotelName}</td>
                <td>RM {booking.totalPrice}</td>
                <td>{booking.paymentStatus}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default AdminDashboard;