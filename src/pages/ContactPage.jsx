import React from "react";
import { Footer, Navbar } from "../components";
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row">
        <div className="col-md-6 mx-auto">
          <p>If you have any questions, feel free to reach out to us via the following:</p>

          <ul className="list-unstyled">
            {/* Instagram link */}
            <li>
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <FaInstagram /> Instagram
              </a>
            </li>

            {/* Email link */}
            <li>
              <a
                href="mailto:youremail@example.com"
                className="text-decoration-none"
              >
                <FaEnvelope /> Email
              </a>
            </li>

            {/* You can add more social links as needed */}
          </ul>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
