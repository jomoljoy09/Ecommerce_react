import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/AuthContext'; // Import useAuth hook

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user from AuthContext
  const navigate = useNavigate(); // For programmatic navigation

  // Handle logout functionality
  const handleLogout = () => {
    logout(); // Call logout function from context
    navigate('/login'); // Redirect user to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">ECOMMERCE</NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            {/* Conditional rendering for Home, About, and Contact links */}
            {!user ? ( // If the user is not logged in, show these links
              <>
                <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
              </>
            ) : null}

            {/* Always show "Products" link, but only show if logged in */}
            {user && (
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/product" 
                  style={{ fontWeight: 'bold', textTransform: 'uppercase' }}
                >
                  Products
                </NavLink>
              </li>
            )}
          </ul>

          <div className="buttons text-center">
            {user ? (
              <>
                <span className="navbar-text text-dark mx-2">Welcome, {user.firstName}!</span>
                
                {/* Conditional rendering for Profile link */}
                {user.email === 'admin@gmail.com' ? (
                  <NavLink to="/userslist" className="btn btn-outline-dark m-2">
                    <i className="fa fa-users mr-1"></i> Users List
                  </NavLink>
                ) : (
                  <NavLink to="/viewuser" className="btn btn-outline-dark m-2">
                    <i className="fa fa-user mr-1"></i> Profile
                  </NavLink>
                )}
                
                <button onClick={handleLogout} className="btn btn-outline-dark m-2">
                  <i className="fa fa-sign-out-alt mr-1"></i> Logout
                </button>
                {/* Cart link is also visible when logged in */}
                <NavLink to="/cart" className="btn btn-outline-dark m-2">
                  <i className="fa fa-cart-shopping mr-1"></i> Cart
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
