import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-root">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="navbar-links">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Login</span>
      </div>
    </div>
  );
};

export default Navbar;
