import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-center p-4">
      <h1 className="display-4 fw-bold text-dark">Hello, my name is Aniket</h1>
      <p className="fs-5 text-muted mt-2">This is your newly set up React project!</p>

      <h2 className="h3 fw-semibold mt-4">📌 What's Included:</h2>
      <ul className="list-unstyled text-dark mt-2">
        <li>✅ React + Bootstrap</li>
        <li>✅ React Router</li>
        <li>✅ React Icons</li>
      </ul>

      <div className="mt-4 d-flex gap-3">
        <a href="https://github.com/Aniket-8719" className="text-dark fs-2">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/aniket-savita-bb295a230/" className="text-primary fs-2">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Home;
