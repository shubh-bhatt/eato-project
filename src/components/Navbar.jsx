import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState("Login");

  return (
    <div className="navbar-root">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li
          onClick={() => {
            isLogin === "Login" ? setIsLogin("Logout") : setIsLogin("Login");
          }}
        >
          {isLogin}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
