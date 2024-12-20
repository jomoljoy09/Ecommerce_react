import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { adminItem } from "../api";

const Admin = () => {
  // State for form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);  // Log the file to ensure it's captured
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file, // Store the file in state
      }));
    }
  };

  // Correctly log the form data
  console.log("Form Data:", {
    title: formData.title,
    description: formData.description,
    price: formData.price,
    category: formData.category,
    image: formData.image ? formData.image.name : "No image selected",
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate price as a valid number if required
    const priceValue = parseFloat(formData.price);
    if (isNaN(priceValue)) {
      alert("Please enter a valid price.");
      return;
    }
  
    if (!formData.image) {
      alert("Please select an image.");
      return;
    }
  
    // Make sure all required fields are present
    if (!formData.title || !formData.description || !formData.category) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Upload the image to a cloud storage service (this is just an example)
    const imageUrl = await uploadImage(formData.image); // uploadImage function to be implemented
  
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);        // Title
    formDataToSend.append("description", formData.description); // Description
    formDataToSend.append("price", formData.price);       // Price
    formDataToSend.append("category", formData.category); // Category
    formDataToSend.append("image", imageUrl);             // Image URL
  
    // Log FormData to confirm everything is appended correctly
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0] + ": " + pair[1]); // Check if all fields are correctly appended
    }
  
    try {
      const result = await adminItem(formDataToSend); // Submit the form data
      console.log("Item added/updated successfully:", result);
    } catch (error) {
      console.error("Error adding/updating item:", error);
    }
  };
  
 // Example function for uploading the image to a service (like Cloudinary, S3, etc.)
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file); // 'file' is the image file selected by the user
  //  formData.append("upload_preset", "your_upload_preset"); // Replace with your preset if using a service like Cloudinary
  
    // Perform the image upload request
    const response = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
      method: "POST",
      body: formData,
    });
  
    const data = await response.json();
    return data.secure_url; // This will be the image URL
  };
  
  

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Add New Item</h1>
        <hr />
        <div className="row my-4">
          <div className="col-md-6 col-lg-6 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Title Input */}
              <div className="my-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Item Title"
                  required
                />
              </div>

              {/* Description Input */}
              <div className="my-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Item Description"
                  rows="3"
                  required
                />
              </div>

              {/* Price Input as a Textbox */}
              <div className="my-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Item Price"
                  required
                />
              </div>

              {/* Category Input */}
              <div className="my-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  className="form-select"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Brand
                  </option>
                  <option value="electronics">Nike</option>
                  <option value="fashion">Puma</option>
                  <option value="furniture">Adidas</option>
                  <option value="books">Reebok</option>
                  {/* Add more categories as needed */}
                </select>
              </div>

              <div className="my-3">
  <label htmlFor="image" className="form-label">
    Image
  </label>
  <input
    type="file"
    className="form-control"
    id="image"
    name="image"
    accept="image/*"
    onChange={handleFileChange}
  />
</div>

              {/* Submit Button */}
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Add Item
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

export default Admin;
