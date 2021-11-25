import React, { useState, useContext } from "react";
import axios from "axios";
import "../auth/SignUp.css";
import Modal from "../modal/Modal";
import { userSign } from "../../App";
import { GiPlanePilot } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import { CgCloseR } from "react-icons/cg";
import SignUpFacebook from "../facebook/FacebookSignUp";

const SignUp = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const { email, setEmail } = useContext(userSign);
  const { password, setPassword } = useContext(userSign);
  const [err, setErr] = useState();
  const [show, setShow] = useState(false);

  return (
    <>
      {!show ? (
        <div class="container-register1">
          <div class="form-register">
            <img
              src="https://soychef.es/wp-content/uploads/2016/11/user-1.png"
              alt=""
            />
            <h1>SignUp Form</h1>

            <div class="container-register">
              <input
                type="text"
                placeholder="firstName"
                className="firstName"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="lastName"
                className="lastName"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />

              <input
                type="text"
                className="phoneNumber"
                placeholder="phoneNumber"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="email"
                className="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="password"
                className="password-sign"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div>
                <button
                  class="signupbtn"
                  onClick={() => {
                    axios
                      .post("https://traveleo-server.herokuapp.com/signUp", {
                        firstName,
                        lastName,
                        phoneNumber,
                        email,
                        password,
                      })
                      .then((result) => {
                        setShow(true);

                        //    console.log(result)
                        setErr(
                          <div className="success">
                            the user has been added successfully
                          </div>
                        );
                      })
                      .catch((err) => {
                        setErr(
                          <div className="wrong">
                            error happen while regeister please try again
                          </div>
                        );
                      });
                  }}
                >
                  signUp
                </button>
                <script
                  async
                  defer
                  crossOrigin="anonymous"
                  src="https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v12.0&appId=300480835180286&autoLogAppEvents=1"
                  nonce="Zu8VEK3r"
                ></script>
                <SignUpFacebook />
                <h4 style={{color:"white"}}>  {err}</h4>
              </div>
              <br />
            </div>
          </div>
        </div>
      ) : (
        <Modal />
      )}
    </>
  );
};
export default SignUp;
