import Navbar from "./components/NavBar";
import Showcase from "./components/Showcase";

const App = () => {
  return (
    <div className="layout">
      <div className="container">
        <Navbar />
        <Showcase />
      </div>
    </div>
  );
};

export default App;
