import React from "react";
import homeImg from "../Images/home page.jpg";
// import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home d-flex align-items-center " id="home">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center ">
                  <h1 className="my-3">
                    Grow Business with{" "}
                    <strong style={{ color: "#3498db" }}>
                      {" "}
                      Raj Enterprise{" "}
                    </strong>
                  </h1>
                  <h2 className="my-1">
                    We are Team with Talented Accountant & Financiers
                  </h2>
                  <div className="my-3">
                    <a href="/" className="btn btn-outline-primary">
                      Get Started
                    </a>
                  </div>
                </div>

                <div className="col-lg-6  order-1 order-lg-2 header-img ">
                  <img
                    src={homeImg}
                    className=" img-fluid animated my-3"
                    alt="Home Img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
