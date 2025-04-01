import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <h1>E-Learning</h1>
        </div>
        <nav class="nav1">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Courses</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <button>
                <Link to="/">Login</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar
