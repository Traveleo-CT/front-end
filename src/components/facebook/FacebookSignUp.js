import FacebookLoginBtn from "react-facebook-login";
import { useHistory } from "react-router-dom";
import axios from "axios";
const SignUpFacebook = () => {
  const history = useHistory();
  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      axios
        .post("http://localhost:5000/signup", {
          email: response.email,
          password: response.name + 123,
          firstName: response.name.split(" ")[0],
          lastName: response.name.split(" ")[1],
        })
        .then((result) => {
          if (!result.data.success) {
          } else {
            history.push(`/login`);
          }
        })
        .catch((err) => {
          console.log(err.message);
          if (err.message === "Request failed with status code 500") {
            console.log("user already exist");
            history.push(`/login`);
          }
        });
    }
  };

  return (
    <>
      <div>
        <FacebookLoginBtn
          appId="300480835180286"
          autoLoad={true}
          fields="name,email"
          callback={responseFacebook}
          innerHTMl="hellop"
        ></FacebookLoginBtn>
      
      </div>
    </>
  );
};
export default SignUpFacebook;
