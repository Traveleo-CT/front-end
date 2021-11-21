import React, { useContext } from "react";
import { GiChestnutLeaf } from "react-icons/gi";
import { userContext } from "../../App";
import "../navigation/Navigation1.css";
import { Link, useRouteMatch } from "react-router-dom";
function Navigation1() {
  const user = useContext(userContext);
  return (
    <div class="header">
      <div class="container">
        <h2
          style={{
            fontFamily: "Dancing Script,cursive",
            textTransform: "capitalize",
          }}
        >
          <bold>
            <GiChestnutLeaf />
            <i class="fas fa-globe fa-1x"></i> Traveleo
          </bold>{" "}
        </h2>

        <div className="">
          <div class="links">
            <ul style={{ textTransform: "upperCase" }}>
              {!user.token ? (
                <>
                  <li style={{ marginRight: "20px" }}>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                      to={`/`}
                    >
                      Main
                    </Link>
                  </li>

                  <li style={{ marginRight: "20px" }}>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                      to={`/about`}
                    >
                      About
                    </Link>
                  </li>

                  <li style={{ marginRight: "20px" }}>
                    {" "}
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                      to={`/contact`}
                    >
                      Contact us
                    </Link>
                  </li>

                  <li style={{ marginRight: "10px" }}>
                    <li style={{ marginRight: "20px" }}>
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontSize: "20px",
                        }}
                        to={`/signUp`}
                      >
                        signUp
                      </Link>
                    </li>
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                      to={`/login`}
                    >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li style={{ marginRight: "20px" }}>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                      to={`/home`}
                    >
                      Home
                    </Link>
                  </li>
                  <li style={{ marginRight: "20px" }}>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                      to={`/Table`}
                    >
                      Table
                    </Link>
                  </li>
                  <li style={{ marginRight: "20px" }}>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                      to={`/myBooking`}
                    >
                      My Booking
                    </Link>
                  </li>
                  <li style={{ marginRight: "20px" }}>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }}
                      to={`/logout`}
                    >
                      LogOut
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation1;
