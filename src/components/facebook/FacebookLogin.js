import FacebookLoginBtn from "react-facebook-login";
import { useHistory } from "react-router-dom";
import axios from "axios";
const LoginFacebook = () => {
  const history = useHistory();
  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      axios
        .post("https://traveleo-server.herokuapp.com/login", {
          email: response.email,
          password: response.name + 123,
        })
        .then((result) => {
          if (!result.data.token) {
            history.push(`/signup`);
          } else {
            localStorage.setItem(`info`, result.data.token);
            history.push(`/home`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v12.0&appId=300480835180286&autoLogAppEvents=1"
          nonce="Zu8VEK3r"
        ></script>

        <FacebookLoginBtn
          appId="300480835180286"
          autoLoad={false}
          fields="name,email"
          callback={responseFacebook}
        ></FacebookLoginBtn>
      </div>
    </>
  );
};
export default LoginFacebook;
