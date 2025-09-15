import Navbar from "./components/NavBar";
import Showcase from "./components/Showcase";
import TopResContainer from "./components/TopResContainer";
import ResDeliveryContainer from "./components/ResDeliveryContainer";

const App = () => {
  return (
    <div className="layout">
      <div className="container">
        <Navbar />
        <Showcase />
        <TopResContainer />
        <ResDeliveryContainer />
      </div>
    </div>
  );
};

export default App;
