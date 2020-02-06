import Cookies from "js-cookie";
import axios from "axios";

async function isLoggedIn() {
  if (!Cookies.get("token")) {
    return false;
  } else {
    return await axios
      .get(
        `https://liis-psihologie-server.herokuapp.com/api/auth/verify?token=${Cookies.get(
          "token"
        )}`
      )
      .then(res => {
        return res.data.success;
      });
  }
}

export default isLoggedIn;
