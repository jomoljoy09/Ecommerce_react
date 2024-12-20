import axios from 'axios';

// Set up the base URL for your API
const API_URL = 'https://localhost:44353/api';  // Change this to your API's URL

// Axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',  // Default headers for JSON
  },
});


// Function to register a user
export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post('/Users/registration', userData);  // POST to /register
    return response.data;  // Return the response data (Success message, user data, etc.)
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;  // Throw the error so it can be caught elsewhere
  }
};


// Function to log in a user
export const loginUser = async (userData) => {
  try {
    const response = await apiClient.post('/Users/login', userData);  // POST to /login
    return response.data;  // Return the response data (User info, token, etc.)
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;  // Throw the error so it can be caught elsewhere
  }
};

// export const adminItem = async (formDataToSend) => {
//   try {
//     const response = await apiClient.post('/Admin/AddUpdateItem', formDataToSend);  // POST to /register
//     return response.data;  // Return the response data (Success message, user data, etc.)
//   } catch (error) {
//     console.error('Error adding item:', error);
//     throw error;  // Throw the error so it can be caught elsewhere
//   }
// };

export const adminItem = async (formDataToSend) => {
  try {
    // No need to create a new FormData object, just use the one passed from the component
    // Append additional fields if needed (though these should already be included in the passed FormData)
    
    // Uncomment the following lines if you need to append anything manually
    // formDataToSend.append("title", formDataToSend.title);
    // formDataToSend.append("description", formDataToSend.description);
    // formDataToSend.append("price", formDataToSend.price);
    // formDataToSend.append("category", formDataToSend.category);

    // Make the POST request with FormData
    const response = await apiClient.post('/Admin/AddUpdateItem', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data', // Axios automatically handles this when using FormData
      }
    });

    return response.data; // Return the response data (could be success message, item info, etc.)
  } catch (error) {
    console.error('Error adding item:', error);
    throw error; // Optionally, re-throw the error for higher-level error handling
  }
};


export const viewUser = async (userId) => {
  try {
    // Assuming your endpoint for fetching user details looks like '/Users/view'
    const response = await apiClient.get(`/Users/viewUser/${userId}`);  // GET request to fetch user details by ID
    if (response.data) {
      return response.data;  // Return the user data if found
    }
    throw new Error("User not found");  // If no data is returned, throw an error
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw new Error('Failed to fetch user details');  // Throw error to handle it in the ViewUser component
  }
};
