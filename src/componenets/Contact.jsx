import React, { useState } from "react";
import Comman from "./ExtraComponents/Comman";
import contactImg from "../Images/contact page.jpg";
import contactus from "../Images/contact us.jpg";

const Contact = () => {


  const [ data ,setData ] = useState( {
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  } )

  const InputEvent = (event) => {
    const { name , value } = event.target;
    
    setData( ( preValue ) => {
      return{
        ...preValue,
        [ name ] : value,
      };
    } );
  };

  const formSubmit = (r) => {
    r.preventDefault();
  };

  return (
    <>
      <Comman
        name="Contact"
        imgsrc={contactImg}
        message="We connect your best Investing Stage/Time and plan here in Raj EnterPrise."
        visits="/services"
        btnName="Get Started"
      />

      <div className="my-5">
        <h1 className="text-center"> Contact Details </h1>
      </div>

      <div className="container contactDiv my-5">
        <div className="row gy-5">
          <div className="col-md-6 col-10 my-5 mx-auto contactImg">
            <img src={contactus} alt="" />
          </div>
          <div className="col-md-6 col-10 my-5 mx-auto contactForm ">

            <form class="contact-form-blogger" onSubmit={formSubmit} >

              <div class="contact-form-wrap row">

                <div class="col-md-6 mb-3">
                  <label class="form-label fs-7 fw-bold" for="field-name">
                    First Name
                  </label>
                  <input
                    class="form-control bg-transparent jt-border-light text-reset"
                    id="field-fname"
                    name="fname"
                    required=""
                    type="text"
                    placeholder="Enter First Name"
                    value={data.fname}
                    onChange={InputEvent}
                  />
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label fs-7 fw-bold" for="field-name">
                    Last Name
                  </label>
                  <input
                    class="form-control bg-transparent jt-border-light text-reset"
                    id="field-lname"
                    name="lname"
                    required=""
                    type="text"
                    placeholder="Enter Last Name"
                    value={data.lname}
                    onChange={InputEvent}
                  />
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label fs-7 fw-bold" for="field-email">
                    Phone Number
                  </label>
                  <input
                    class="form-control bg-transparent jt-border-light text-reset"
                    id="field-phone"
                    name="phone"
                    required=""
                    type="phone"
                    placeholder="Enter Phone Number"
                    value={data.phone}
                    onChange={InputEvent}
                  />
                </div>

                <div class="col-md-6 mb-3">
                  <label class="form-label fs-7 fw-bold" for="field-email">
                    Email Address
                  </label>
                  <input
                    class="form-control bg-transparent jt-border-light text-reset"
                    id="field-email"
                    name="email"
                    required=""
                    type="email"
                    placeholder="Enter Email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>

                <div class="col-12 mb-3">
                  <label class="form-label fs-7 fw-bold" for="field-message">
                    Message
                  </label>
                  <textarea
                    class="form-control bg-transparent jt-border-light text-reset"
                    id="field-message"
                    name="message"
                    required=""
                    rows="3"
                    placeholder="Enter Message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>

                <div class="col-12 mb-3">
                  {/* <button
                    class="btn btn-sm fw-bold py-2 px-5 jt-btn-primary"
                    type="submit"
                  >SEND</button> */}
                  <a href="/contact" className="btn btn-primary">Go somewhere</a>
                </div>

              </div>

            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
