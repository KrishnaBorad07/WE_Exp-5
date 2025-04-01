import React from 'react'
import Navbar from "../components/Navbar.jsx";


const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className="courses">
        <h1>Explore Our Courses</h1>
        <ul>
          <li>Web develploment</li>
          <li>Machine learning</li>
          <li>Data science</li>
          <li>Cyber Security</li>
        </ul>
      </div>
    </div>
  );
}

export default Courses
