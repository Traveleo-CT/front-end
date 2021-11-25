import React, { Component, useContext, useEffect } from "react";
import FacebookLoginBtn from "react-facebook-login";

export default class LoginFacebook extends Component {
  state = {
    auth: false,
    name: "",
    email: "",
    userID: "",
  };
  responseFacebook = (response) => {
    console.log("response", response);

    if (response.status !== "unknown") {
      history.push(`/home`);

      axios
        .post("https://traveleo-server.herokuapp.com/login", { email, password })
        .then((result) => {
          if (!result.data.token) {
            setErr(result.data);
          } else {
            localStorage.setItem(`info`, result.data.token);
            newUser.setToken(result.data.token);
            history.push(`/home`);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      this.setState({
        name: response.name,
        email: response.email,
        userID: response.userID,
        auth: true,
      });
    }
  };

  render() {
    let data = null;
    this.state.auth
      ? (data = <div>welcome you are logedIn with facebook</div>)
      : (data = (
          <div>
            <FacebookLoginBtn
              appId="300480835180286"
              autoLoad={true}
              fields="name,email,token"
              callback={this.responseFacebook}
            ></FacebookLoginBtn>
          </div>
        ));

    return (
      <>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v12.0&appId=214231877501977&autoLogAppEvents=1"
          nonce="Zu8VEK3r"
        ></script>
        {data}
      </>
    );
  }
}
