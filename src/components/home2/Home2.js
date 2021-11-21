import React from "react";
import "../home2/Home2.css";
import Weather from "../ui/weather";
import Prayertime from "../ui/prayertime";
import { Link } from "react-router-dom";
function Home2() {
  return (
    <div>
      <div className="landing">
        <div className="landText">
          <p>Increase demand and create excitement for</p>
          <h1> Your Perfect Tour in France Starts Here!</h1>
          <button className="button1"><Link style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "20px",
                      }} to="/about">About</Link></button>
        </div>
      </div>
      <div className="w1">
        <div className="container">
          <div className="welcome">
            <h2>WELCOME TO TRAVELS DEMO SITE</h2>
            <img
              src="https://demo.mohiulbanna.com/wp-content/uploads/2021/10/hr-white-three.png"
              alt=""
            />
            <p>
              Travel Demo site searches compare and monitor deals and latest
              offers for flights, hotels, car rentals, cruises, activities, and
              all-inclusive travel from over a hundred booking services so you
              can get to that place you have always wanted! We provide you with
              the industry’s best and cheapest options. No additional taxes or
              hidden fees.
            </p>
            {}
            <button><Link style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "20px",
                      }} to="/login">Flights</Link></button>
          </div>
        </div>
      </div>
      <p
        style={{
          color: "#192B42",
          textAlign: "center",
          fontSize: "40px",
          marginTop: "50px",
        }}
      >
        Professional travel planning
      </p>
      <div className="about" id="about">
        <div className="title"></div>
        <div className="content1">
          <div className="column col-left reveal">
            <div className="img-card">
              <img
                src="https://res2.weblium.site/res/5a8314f6f8569f00268c52c9/5a8564e2b70f990027a187c4_optimized_927.jpeg.webp"
                alt=""
              />
            </div>
          </div>
          <div className="column col-right reveal">
            <p>
              If you are planning a trip to France,Travel Demo site searches
              compare and monitor deals and latest offers for flights, hotels,
              car rentals, cruises, activities Cilantro is the best choice.
              Whether it's your first time in France or the 20th, there is
              always something special to discover. Each of France province has
              its own must-see peculiarities. Just specify the region you prefer
              to visit and one of our expert travel guides will provide you with
              a well-thought-out vacation plan. Book your trip and enjoy the
              amazing Paris experience!
            </p>
            <h3>What we offer</h3>
            <p style={{ color: "#192b42" }}>
              We offer hundreds of sightseeing tours and custom packages which
              can meet any taste and budget.
            </p>
            <h3>Our experience</h3>
            <p style={{ color: "#192b42" }}>
              Each of our travel specialists meets first-class industry
              standards and has at least 4.5 out of 5-star rating.
            </p>
            <h3>Satisfaction guaranteed</h3>
            <p style={{ color: "#192b42" }}>
              Our experienced travel agents guarantee each client the most
              enjoyable and memorable experience.
            </p>
          </div>
        </div>
      </div>
      <p
        className="sli"
        style={{
          color: "#192B42",
          textAlign: "center",
          fontSize: "40px",
          marginTop: "100px",
        }}
      >
        Popular Destination
      </p>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/6249516/pexels-photo-6249516.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/2440009/pexels-photo-2440009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/326231/pexels-photo-326231.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/5859147/pexels-photo-5859147.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/5029795/pexels-photo-5029795.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>{" "}
          <div class="slide">
            <img
              src="https://images.pexels.com/photos/2218344/pexels-photo-2218344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/2253818/pexels-photo-2253818.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container-gallery">
        <div className="container-g">
          <div className="head">
            <p>Latest on Instagram</p>
          </div>
          <div className="imgs-con">
            <div className="box">
              <img
                src="https://res2.weblium.site/res/5addf9e084fc10002576ab7d/5ade23a384fc100025779252_optimized.jpeg"
                alt=""
              />
            </div>
            <div className="box">
              <img
                src="https://res2.weblium.site/res/5c065aa2fb5f790022ae66df/5c07b0f1e2e30100229aee8c_optimized"
                alt=""
              />
            </div>
            <div className="box">
              <img
                src="https://res2.weblium.site/res/5c065aa2fb5f790022ae66df/5c07b0eae2e30100229aee8b_optimized"
                alt=""
              />
            </div>
            <div className="box">
              <img
                src="https://res2.weblium.site/res/5c065aa2fb5f790022ae66df/5c07b11c7ad4180023ffc7fc_optimized"
                alt=""
              />
            </div>
            <div className="box">
              <img
                src="https://images.pexels.com/photos/2886284/pexels-photo-2886284.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            </div>
            <div className="box">
              <img
                src="https://res2.weblium.site/res/5c065aa2fb5f790022ae66df/5c07b10fe2e30100229aee8d_optimized"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Healthy" id="port">
        <div className="container">
          <p
            style={{
              color: "#192B42",
              textAlign: "center",
              fontSize: "40px",
              marginTop: "20px",
            }}
          >
            From the Blog
          </p>
          <div className="Healthy-content">
            <div className="card1">
              <img
                src="https://res2.weblium.site/res/weblium/58d59fc3f522de0001430e60_optimized_1396.jpeg.webp"
                alt=""
              />
              <div className="info">
                <p>Ideas By Leo Smith, 3 days ago</p>
                <h3>Travel Ideas for Mother’s Day</h3>
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="card1">
              <img
                src="https://res2.weblium.site/res/5c065aa2fb5f790022ae66df/5c07b843b75d280024b5d603_optimized_1396.webp"
                alt=""
              />
              <div className="info">
                <p>Destinations By Leo, 2 weeks ago</p>
                <h3>Top 5 Must-See Places in Paris</h3>
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="card1">
              <img
                src="https://res2.weblium.site/res/5c065aa2fb5f790022ae66df/5c07b7fee2e30100229af891_optimized_930.webp"
                alt=""
              />
              <div className="info">
                <p>Food By Leo Smith, 4 weeks ago </p>
                <h3>Best Places to Eat French Food</h3>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-gallery">
          <div className="container-g">
            <div className="head">
              <p>Stay Informed </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Weather />
                <Prayertime />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
