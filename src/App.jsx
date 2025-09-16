import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="layout">
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
