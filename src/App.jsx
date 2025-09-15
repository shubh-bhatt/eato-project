import Navbar from "./components/NavBar";
import Showcase from "./components/Showcase";
import TopResContainer from "./components/TopResContainer";
import ResDeliveryContainer from "./components/ResDeliveryContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="layout">
      <div className="container">
        <Navbar />
        <Showcase />
        <TopResContainer />
        <ResDeliveryContainer />
      </div>
      <Footer />
    </div>
  );
};

export default App;
