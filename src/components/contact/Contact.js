import React, { useState, useRef } from "react";
import "../contact/Contact.css";
import swal from "sweetalert";
import emailjs from "emailjs-com";

function Contact() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [Message, setMessage] = useState();
  const form = useRef();
  const refName = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_f6a4xbt",
        e.target,
        "user_6GspumcSsuh0uxY7Vqu7i"
      )
      .then(
        (result) => {
          console.log(result.text);

          swal(
            "Thank you for youre messgae",
            "Travaleo team will contact you as soon as",
            "success"
          );
          setMessage("");
          setEmail("");
          setUserName("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="container-contact">
        <div className="form">
          <img src="./images/a-1.png" alt="" />
          <h1>Contact us</h1>

          <div className="contact-form">
            <form
              style={{ marginBottom: "100px" }}
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="to_name" 
                placeholder="YOUR NAME"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={userName}
                required
               
              />
              <input
                type="email"
                name="from_name"
                ref={refName}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="EMAIL ADDRESS"
                required
              />
              <textarea
                className="textarea"
                name="message"
                cols="30"
                rows="10"
                value={Message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="MESSAGE"
              ></textarea>

              <div className="clear">
                <button type="submit" className="btn-contact">
                  Submit MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="con">
        <div className="card-contact">
          <img src="./images/a-2.png" alt="" />
          <h2>Call Us</h2>
          <p>(962)7877777777</p>
        </div>
        <hr />
        <div className="card-contact">
          <img src="./images/a-3.png" alt="" />
          <h2>Email Us</h2>
          <p>Contact@Trevaleo.com</p>
        </div>
      </div>
    </>
  );
}
export default Contact;
