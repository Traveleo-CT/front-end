import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyBooking.css";
import moment from "moment";
import Payment from "../payment/payment";
export const MyBooking = ({ book, state }) => {
  const [adults, setAdults] = useState();
  const [results, setresults] = useState();
  const [myBook, setMyBook] = useState();

  useEffect(() => {
    axios
      .get("https://traveleo-server.herokuapp.com/flightBooking/allBooking/", {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((result) => {
        setMyBook(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  axios
    .get("https://traveleo-server.herokuapp.com/flightBooking/allBooking/", {
      headers: { Authorization: `Bearer ${state.token}` },
    })
    .then((result) => {
      setMyBook(result.data);
    })
    .catch((err) => {
      console.log(err);
    });

  const deleted = (e) => {
    console.log(e);
    axios
      .delete(`https://traveleo-server.herokuapp.com/flightBooking/${e}`, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((result) => {
        console.log("success delete the booking");
        setresults("Your Book Was Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateAduluts = (z) => {
    setAdults(z.target.value);
  };
  const updated = (e) => {
    console.log(e);
    axios
      .put(
        `https://traveleo-server.herokuapp.com/flightBooking/${e}`,
        { adults: adults },
        { headers: { Authorization: `Bearer ${state.token}` } }
      )
      .then((result) => {
        setresults("Number Of Adults Was Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="back"></div>
      <div className="flight-table">
        {myBook &&
          myBook.flights.map((element) => {
            return (
              <div>
                <div className="card">
                  <div className="image">
                    <img
                      src="https://i.insider.com/55d38bda2acae7c7018c1153?width=1200&format=jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <h2 className="date">
                      Date:
                      {moment(element.flightId.date)
                        .utcOffset(0, false)
                        .format("YYYY-MM-DD HH:mm")}
                    </h2>

                    <h2>Destination: {element.flightId.destination}</h2>
                    <p>Enter The Number Of New Adults</p>
                    <input type="number" onChange={updateAduluts} />
                    <br></br>
                    {results && <p>{results}</p>}
                    <div>
                      <button
                        className="btn1"
                        onClick={() => updated(element._id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn1"
                        onClick={() => deleted(element._id)}
                      >
                        Delete
                      </button>
                    </div>
                    <Payment amount={element.flightId.price * element.adults} />
                  </div>
                  <div className="status">
                    <div className="stat">
                      <div className="value">First Name</div>
                      <div className="type">{element.userId.firstName}</div>
                    </div>
                    <div className="stat">
                      <div className="value">TotalPrice</div>
                      <div class="type">
                        {element.flightId.price * element.adults}$
                      </div>
                    </div>
                    <div className="stat">
                      <div className="value">Adults</div>
                      <div class="type">{element.adults}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
