import React from "react";

const Footer = () => {

    const date = new Date().getFullYear();

    // const n = d.getFullYear();

  return (
    <>
    <footer style={ { backgroundColor: "#2c2c2c" , Color: "white"} } >
      <div className="container mt-5 py-3">
        <p className="text-muted text-center">
          Made with ♥ by Raj Parikh for Project Mind.
        </p>
        <p className="text-muted text-center">
        <a href="/">www.rajenterprise.com</a> ©️ {date} year Raj Parikh. All Rights Reserved | Terms & Conditions.
        </p>
        <h6 className="text-muted text-center">
          <small>
            <a href="/contact">Contact us</a>
          </small>
        </h6>
      </div>
      </footer>
    </>
  );
};

export default Footer;
