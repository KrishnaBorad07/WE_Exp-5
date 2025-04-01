import React from "react";
import Navbar from "../components/Navbar.jsx";

const Contact = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="contact">
            <h1>Contact Us</h1>
            <p>Email: support@gmail.com</p>
            <p>Phone: +123 4567 890</p>
        </div>
      </div>
    </>
  );
}

export default Contact
