import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useAuth } from './AuthContext';
import { loginUser } from "../api"; // Import the API service

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const { login } = useAuth(); // Get login function from context

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
  //  window.localStorage.setItem()
    // Clear any previous messages
    setMessage('');

    // Client-side validation
    if (!email || !password) {
      setMessage('Please fill in both email and password.');
      return;
    }

    const userData = {
      id:0,
      firstName: "",
      lastName: "",
      Email: email,
      Password: password,
      Fund: 0.0,
      Type: "",
      Status: "",
      CreatedOn: "2000-01-01"
    };

    localStorage.setItem('user', JSON.stringify(userData));
    console.log("Stored User Data:", userData);

    // localStorage.setItem('user', JSON.stringify(userData)); 
    // console.log("shunduuuuuu",userData.id);
    setLoading(true); // Set loading state

    try {
      const response = await loginUser(userData); // API call
      console.log("API Response: ", response);

      // Ensure the response structure matches what you're checking here
      if (response && response.statusCode === 200) {
        // Use the login method from context to save user data globally
        login(userData); // Save user in context and localStorage

        setMessage('Login successful!');

        if (userData.Email === "admin@gmail.com") {
          setMessage('Login successful! Redirecting to admin...');
          navigate("/admin"); // Redirect to the admin page
        } else {
          setMessage('Login successful! Redirecting to products...');
          navigate("/product"); // Redirect to products for normal user
        }
      } else {
        setMessage('Login failed. Please try again.');
      }
    } catch (error) {
      setMessage(error.message || 'Login failed. Please try again later.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleLogin}>
              {/* Email Field */}
              <div className="my-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Password Field */}
              <div className="my-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Display messages (errors or success) */}
              {message && <div className="alert alert-info">{message}</div>}

              {/* Link to register */}
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link to="/register" className="text-decoration-underline text-info">
                    Register
                  </Link>
                </p>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
