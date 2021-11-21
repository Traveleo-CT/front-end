import React from "react";
import "../about/About.css"
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { GiRingingBell } from "react-icons/gi";
// import { MdOutlineSecurity } from "react-icons/md";
// import { BsBasketFill } from "react-icons/bs";
function About() {
  return (
    <>
      <div className="containerq">
        <section className="about" id="about">
          <div className="content">
            <div className="column col-left ">
              <h3 className="content-title">
                We Create Intuitive
                <br /> Booking Websites for Less
              </h3>
              <hr />
              <Link to="/contact">
                <button className="button">Contact Us</button>
              </Link>
            </div>
            <div className="column col-right">
              <p>
              Traveleo is the world’s first inspirational travel search service that focuses on what’s really important: your Interests and your Budget!

How practical is an amazing weekend break for skiing if what you really look forward is relaxing on a sandy beach? How good a great destination can be, if it’s too expensive to get there? Cheapflights offers an innovative and useful online experience, so you can find your perfect destination in just a couple of clicks!
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="containerc" style={{ marginTop: "70px" }}>
        <div className="cont">
          <div className="title ">
            <img
              src="https://uploads-ssl.webflow.com/5e62759ab81ddc4f5815a3b6/5e62759b04473656d2dafba5_question-mark.svg"
              alt=""
            />

            <h1 className="section-title">Frequently Asked Questions</h1>
          </div>
          <div className="q">
            <h3
              style={{
                marginTop: "70px",
                fontWeight: "bold",
                marginBottom: "20px",
                paddingRight: "9px",
              }}
            >
               {/* //<BsBasketFill />  */}
               FREE ACCESS 
            </h3>
            <p>
            Unlike some online Booking, we don’t charge any additional fees for placing a bid and we provide our clients with completely free access to all Bookings available on our website.
            </p>
            <h3
              style={{
                marginTop: "70px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {" "}
              <span>
                {" "}
                {/* <MdOutlineSecurity /> */}
              </span>{" "}
              100% SECURE BIDS
            </h3>
            <p>
              We guarantee that every bid placed on our website is safe and
              secure thanks to the SSL technology, which protects all your
              entered data and actions performed on our website.
            </p>
            <h3
              style={{
                marginTop: "70px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {" "}
             {/* <GiRingingBell />  */}
             NEW ITEMS EVERYDAY 
            </h3>
            <p>
            We daily update our catalog of Booking with new offers
            </p>
          </div>
        </div>
      </div>
      <div className="site-section pt-0">
        <div className="containerdd">
          <div className="row">
            <div className="title">
              <h2 className="section-title">
                How <strong>It Works</strong>
              </h2>
            </div>
          </div>
          <div className="rows">
            <div className="col-lg-3">
              <div className="step">
                <span className="wrap-icon icon-user">01</span>
                <h3>Register</h3>
                <p>
                  To start Booking, you’ll need to register. It’s
                  completely free!
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="step">
                <span className="wrap-icon icon-money">02</span>
                <h3>Select Book</h3>
                <p>
                You can instantly book after registration.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="step">
                <span className="wrap-icon icon-glass">03</span>
                <h3>Submit</h3>
                <p>
                Submitting a booking is fast and easy. The process takes approximately 5 minutes.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="step last">
                <span className="wrap-icon icon-trophy">04</span>
                <h3>Win</h3>
                <p>
                Easily win at Booking and enjoy the travel 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
