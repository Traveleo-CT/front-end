import React, { useState, useContext } from "react";
import axios from "axios";
import "../auth/SignUp.css";
import Modal from "../modal/Modal";
import { userSign } from "../../App";
import { GiPlanePilot } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import { CgCloseR } from "react-icons/cg";
import SignUpFacebook from "../facebook/FacebookSignUp"


const SignUp = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const { email, setEmail } = useContext(userSign);
  const { password, setPassword } = useContext(userSign);
  const [status, setStatus] = useState();
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
                   .post("http://localhost:5000/signUp", {
                     firstName,
                     lastName,
                     phoneNumber,
                     email,
                     password,
                   })
                   .then((result) => {
                     setShow(true);

                     //    console.log(result)
                     setStatus(
                       <div className="success">
                         the user has been added successfully
                       </div>
                     );
                   })
                   .catch((err) => {
                     setStatus(
                       <div className="wrong">
                         error happen while regeister please try again
                       </div>
                     );
                   });
               }}
             >
               signUp
             </button>
               
            </div>
            <div class="spacing">
              <script
                async
                defer
                crossOrigin="anonymous"
                src="https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v12.0&appId=300480835180286&autoLogAppEvents=1"
                nonce="Zu8VEK3r"
              ></script>
              <SignUpFacebook />
              {/* {err} */}
            </div>
          </div>
        </div>
      </div>
        // <div className="main_sign">
        //   <div className="bck_dv"> </div>
        //   <div className="signUp">
        //     <span
        //       className="close_x"
        //       onClick={() => {
        //         history.push("/");
        //       }}
        //     >
        //       <CgCloseR
        //         style={{
        //           backgroundColor: "rgb(227,64,61)",
        //           color: "#fff",
        //           borderRadius: "4px",
        //         }}
        //       />
        //     </span>
        //     <h1
        //       style={{
        //         fontSize: "20px",
        //         textAlign: "center",
        //         paddingTop: "0px",
        //         marginTop: "-20px",
        //       }}
        //     >
        //       <span style={{ color: "rgb(19,145,210)" }}>Tre</span>
        //       <span style={{ color: "rgb(252,158,21)" }}>val</span>
        //       <GiPlanePilot style={{ fontSize: "3vw" }} />
        //       <span style={{ color: "rgb(227,64,61)" }}>eo</span>
        //     </h1>
        //     <h2 className="header-name">SignUp</h2>
        //     <input
        //       type="text"
        //       placeholder="firstName"
        //       className="firstName"
        //       onChange={(e) => {
        //         setFirstName(e.target.value);
        //       }}
        //     />
        //     <input
        //       type="text"
        //       placeholder="lastName"
        //       className="lastName"
        //       onChange={(e) => {
        //         setLastName(e.target.value);
        //       }}
        //     />

        //     <input
        //       type="number"
        //       className="phoneNumber"
        //       placeholder="phoneNumber"
        //       onChange={(e) => {
        //         setPhoneNumber(e.target.value);
        //       }}
        //     />
        //     <input
        //       type="email"
        //       placeholder="email"
        //       className="email"
        //       onChange={(e) => {
        //         setEmail(e.target.value);
        //       }}
        //     />
        //     <input
        //       type="password"
        //       placeholder="password"
        //       className="password-sign"
        //       onChange={(e) => {
        //         setPassword(e.target.value);
        //       }}
        //     />
        //     <button
        //       className="btn-sign"
        //       onClick={() => {
        //         axios
        //           .post("http://localhost:5000/signUp", {
        //             firstName,
        //             lastName,
        //             phoneNumber,
        //             email,
        //             password,
        //           })
        //           .then((result) => {
        //             setShow(true);

        //             //    console.log(result)
        //             setStatus(
        //               <div className="success">
        //                 the user has been added successfully
        //               </div>
        //             );
        //           })
        //           .catch((err) => {
        //             setStatus(
        //               <div className="wrong">
        //                 error happen while regeister please try again
        //               </div>
        //             );
        //           });
        //       }}
        //     >
        //       signUp
        //     </button>
        //     <SignUpFacebook/>
        //     {status}
        //   </div>
        //   <br />
        
         

        // </div>
      ) : (
        <Modal />
      )}
    </>
  );
};

export default SignUp;
