import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "./Search.css";

const Search = ({ setflights, setAdult }) => {
  const destenations = [
    "San_Francisco",
    "Amman",
    "Tripoli",
    "Plockton",
    "Carthage",
  ];

  const deConverter = {
    FlySFO: "San_Francisco  International Airport (FlySFO)",
    QAIA: "Amman Queen Alia International Airport (QAIA)",
    TIP: "Tripoli Tripoli International Airport  (TIP)",
    LCY: "London London City Airport:(LCY)",
    TUN: "Carthage Tunis–Carthage International Airport (TUN)",
  };

  const origins = ["Amman", "San_Francisco", "Tripoli", "London", "Carthage"];
  let { path, url } = useRouteMatch();
  const [origin, setOrigin] = useState("Amman");
  const [destination, setDestination] = useState("San_Francisco");
  const [dateFrom, setDateFrom] = useState("2021-1-1");
  const [adults, setAdults] = useState(1);
  const [dateTo, setDateTo] = useState("2022-1-1");
  const history = useHistory();
  const converter = {
    San_Francisco: "FlySFO", //San Francisco International Airport (FlySFO)
    Amman: "QAIA", //Queen Alia International Airport (QAIA)
    Tripoli: "TIP", //Tripoli International Airport  (TIP)
    London: "LCY", //London City Airport:(LCY)
    Carthage: "TUN", //Tunis–Carthage International Airport (TUN)
  };

  const click = () => {
    axios
      .post("https://traveleo-server.herokuapp.com/flights/search/", {
        origin: converter[origin],
        destination: converter[destination],
        dateFrom,
        adults,
        dateTo,
      })
      .then((result) => {
        const flights = result.data.flights;
        const handledFlights = flights.map((item) => {
          return {
            bookingId: item._id,

            destination: deConverter[item.destination],
            origin: deConverter[item.origin],
            date: item.date,
            capacity: item.capacity,
            totalPrice: item.price * adults,
          };
        });

        console.log("flight", result.data.flights);
        setflights(handledFlights);
        setAdult(adults);

        let p = path.split("/home");
        history.push(`/Table`);
      });
  };
  return (
    <>
      <div className="back"></div>
      <div className="homeBody">
        <div className="smallBody">
          <div className="homeDiv">
            <div className="homeDiv">
              <div className="homeDiv" id="container">
                <h1>origin</h1>
                <select
                  className="homeSelect"
                  id="origin"
                  name="origin"
                  onChange={(r) => {
                    setOrigin(r.target.value);
                  }}
                  required
                >
                  {origins.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </div>
              <div className="homeDiv" id="container">
                <h1>Destination</h1>
                <select
                  className="homeSelect"
                  id="destination"
                  name="destination"
                  onChange={(r) => {
                    setDestination(r.target.value);
                  }}
                  required
                >
                  {destenations.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </div>
            </div>
            <h1>Adults</h1>
            <input
              className="homeInput"
              type="number"
              defaultValue={1}
              onChange={(w) => {
                setAdults(w.target.value);
              }}
            />
            <h1 style={{ marginTop: "5vh" }}>from</h1>
            <input
              className="homeInput"
              type="date"
              defaultValue="2021-01-01"
              onChange={(e) => {
                setDateFrom(e.target.value);
              }}
            />
            <h1 style={{ marginTop: "5vh" }}>to</h1>
            <input
              className="homeInput"
              defaultValue="2021-12-31"
              type="date"
              onChange={(e) => {
                setDateTo(e.target.value);
              }}
            />
            <button className="homeButton" onClick={click}>
              Search
            </button>
          </div>
        </div>

        {/* <img
        className="backImg"
        src="https://cdn.pixabay.com/photo/2018/09/25/17/14/airplane-3702676_960_720.jpg"
      ></img> */}
      </div>
    </>
  );
};

export default Search;
