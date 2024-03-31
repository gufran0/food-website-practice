import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(userContext);

  useEffect(() => {
    console.log("useeffect");
  }, []);

  const onlineStatus = useOnlineStatus();
  console.log("header render");
  // it updates the whole page(rendered)
  // let btnName = "login";

  const cartItems = useSelector((store) => store?.cart?.items);
  return (
    <div className="flex justify-between shadow-lg bg-red-200 ">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/"> home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">about us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">contact us</Link>
          </li>
          <li className="px-4 font-bold ">
            <Link to="/cart"> Cart - {cartItems.length}</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">grocery</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
            <li className="px-4 font-bold">{loggedInUser}</li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
