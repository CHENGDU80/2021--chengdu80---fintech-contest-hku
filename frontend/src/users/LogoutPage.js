import React from "react";
import { Link } from "react-router-dom";
import "./LogoutPage.css";

const LogoutPage = () => {
  return (
    <div id="logout-div">
      <div id="logout-content-div">
        <p className="logout-text">
          You have sucessfully logged out!{" "}
          <Link to="/welcome" className="logout-text">
            Back to homepage!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogoutPage;
