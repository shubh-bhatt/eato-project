import Navbar from "./components/NavBar";
import Showcase from "./components/Showcase";
import TopRestaurants from "./components/TopRestaurants";

const App = () => {
  return (
    <div className="layout">
      <div className="container">
        <Navbar />
        <Showcase />
        <TopRestaurants />
      </div>
    </div>
  );
};

export default App;
