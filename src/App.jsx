import Navbar from "./components/NavBar";
import Showcase from "./components/Showcase";
import TopResContainer from "./components/TopResContainer";

const App = () => {
  return (
    <div className="layout">
      <div className="container">
        <Navbar />
        <Showcase />
        <TopResContainer />
      </div>
    </div>
  );
};

export default App;
