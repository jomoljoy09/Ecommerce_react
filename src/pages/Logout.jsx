import React, { useEffect } from 'react';
import { useAuth } from './AuthContext'; // Use the custom hook to access the AuthContext

const Logout = () => {
  const { logout } = useAuth(); // Access logout function from context

  useEffect(() => {
    logout(); // Call the logout function when component mounts
  }, [logout]);

  return <div>Logging out...</div>;
};

export default Logout;
