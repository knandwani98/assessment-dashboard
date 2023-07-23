import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="main-container">
      <section className="page404 f-col f-center">
        <h1>
          404:
          <br /> Page Not Found
        </h1>
        <p>Go back to Homepage</p>
        <Link to="/" className="btn-pill link">
          Home
        </Link>
      </section>
    </div>
  );
};

export default NotFound;
