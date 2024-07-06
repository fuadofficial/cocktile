import React from "react";
import { Link } from "react-router-dom";

function NoDataFound() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Oopss!! The page not found!! </h1>
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NoDataFound;
