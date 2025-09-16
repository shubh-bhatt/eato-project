import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState("Login");
  const [cart, setCart] = useState(0);

  return (
    <div className="navbar-root">
      <Link to={"/"}>
        <div className="logo">
          <img src={logo}></img>
        </div>
      </Link>
      <ul className="navbar-links">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>About</li>
        <li>Contact</li>
        <li
          onClick={() => {
            isLogin === "Login" ? setIsLogin("Logout") : setIsLogin("Login");
          }}
        >
          {isLogin}
        </li>
        <li>{cart} Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;
