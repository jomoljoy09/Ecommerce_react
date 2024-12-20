import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Footer, Navbar } from "../components"; // Import Navbar and Footer for consistent layout

const ViewUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log("User Data in ViewUser:", userData);

    // Normalize the keys to lowercase
    const normalizedUserData = Object.fromEntries(
      Object.entries(userData).map(([key, value]) => [key.toLowerCase(), value])
    );

    console.log("ayyyoooooo:", normalizedUserData.email); // Now you can access 'email'

    // Check if the userData is available and has an 'email'
    if (!normalizedUserData.email) {
      navigate("/login"); // If no valid user data or email, redirect to login
    } else {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(`https://localhost:44353/api/Users/viewUser/${normalizedUserData.email}`); // Fetch user data from API
          if (response.status === 200) {
            setUser(response.data.users); // Store user data on success
          } else {
            setError("User not found.");
          }
        } catch (err) {
          setError("Failed to fetch user details.");
        } finally {
          setLoading(false);
        }
      };
      fetchUserDetails();
    }
  }, [navigate]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="alert alert-danger text-center">{error}</div>;

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">User Profile</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-6 col-lg-6 mx-auto">
            <div className="my-3">
              <label><strong>First Name:</strong> {user.firstName}</label>
            </div>
            <div className="my-3">
              <label><strong>Last Name:</strong> {user.lastName}</label>
            </div>
            <div className="my-3">
              <label><strong>Email:</strong> {user.email}</label>
            </div>
            <div className="my-3">
              <label><strong>User Type:</strong> {user.type}</label>
            </div>
            <div className="my-3">
              <label><strong>Fund:</strong> {user.fund.toFixed(2)}</label>
            </div>

            {/* If you want to show a button to logout or go back */}
            {/* <div className="text-center my-3">
              <button 
                className="btn btn-dark"
                onClick={() => navigate("/login")} // Navigate back to login
              >
                Logout
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewUser;
