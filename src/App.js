import React, { useState, createContext } from "react";
import Home from "./components/home/Home";
import Table from "./components/ui/table";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import logOut from "./components/logout/logOut";

import Navigation1 from "../src/components/navigation/Navigation1";
import About from "./components/about/About";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Footer from "../src/components/footer/footer";
import { UpdateFlightBooking } from "./components/updateFlightBooking/UpdateFlightBooking";
<<<<<<< HEAD
// import Contact from "./components/contact/Contact";
import SideBar from "./components/sidebar";
import { MyBooking } from "./components/myBooking/MyBooking";
=======
import Contact from "./components/contact/Contact";
>>>>>>> 5fb38b7bf19b29389896b842bbfeb6a7909e1e48

import { MyBooking } from "./components/myBooking/MyBooking";
import Home2 from "./components/home2/Home2";
export const userSign = createContext();

export const userContext = createContext();
const App = () => {
  const [adult, setAdult] = useState();
  const [flights, setflights] = useState();
  const [token, setToken] = useState();
  const state = { token, setToken };
  const [email, setEmail] = useState("");
  const [book, setBook] = useState();
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <Switch>
        <userContext.Provider value={state}>
          <Navigation1 />
          {/* <Navigation/> */}
          <Route
            path={`/myBooking`}
            render={() => (
              <MyBooking
                flights={flights}
                state={state}
                book={book}
                adult={adult}
              />
            )} ///
          />
          <div className="" />

          <Route
            path={`/Update`}
            render={() => <UpdateFlightBooking value={flights} state={token} />}
          />

          <userSign.Provider value={{ email, password, setEmail, setPassword }}>
            <Route path={`/signUp`} component={SignUp} />
            <Route path={`/login`} component={Login} />

<<<<<<< HEAD
              <Route path={`/logout`} component={logOut} />
            </userSign.Provider>
            {/* <Route path={`/contact`} component={Contact} /> */}
            <Route path={`/about`} component={About} />
            <Route
              path={`/home`}
              render={() => <Home setvalue={setflights} setadult={setAdult} />}
            />
            
            <Route
              path={`/Table`}
              render={() => (
                <Table
                  value={flights}
                  state={state}
                  adult={adult}
                  setBook={setBook}
                /> //
              )}
            />
            {/* <Route exact path={path} component={Weather}></Route> */}
            <Route exact path={"/"} component={Cities}></Route>
            <Route exact path={"/"} component={Attractions}></Route>
            <Route exact path={"/"} component={SideBar}></Route>
          </userContext.Provider>
        </Switch>
=======
            <Route path={`/logout`} component={logOut} />
          </userSign.Provider>

          <Route path={`/contact`} component={Contact} />
          <Route path={`/about`} component={About} />
          <Route
            path={`/home`}
            render={() => <Home setvalue={setflights} setadult={setAdult} />}
          />
          <Route
            path={`/Table`}
            render={() => (
              <Table
                value={flights}
                state={state}
                adult={adult}
                setBook={setBook}
              /> 
            )}
          />
          <Route exact path={"/"} component={Home2}></Route>
        </userContext.Provider>
      </Switch>
>>>>>>> 5fb38b7bf19b29389896b842bbfeb6a7909e1e48

      <Footer />
    </div>
  );
};
export default App;
