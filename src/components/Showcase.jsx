import northIndian from "../assets/northindian1.avif";
import pizza from "../assets/pizzas.avif";
import dosa from "../assets/dosa.avif";
import noodles from "../assets/noodles.avif";
import cake from "../assets/cake.avif";
import rolls from "../assets/rolls1.avif";
import burger from "../assets/burger.avif";
import icecream from "../assets/icecream.avif";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase-title">What's on your mind?</div>
      <div className="showcase-images">
        <img className="showcase-image" src={northIndian} />
        <img className="showcase-image" src={pizza} />
        <img className="showcase-image" src={dosa} />
        <img className="showcase-image" src={noodles} />
        <img className="showcase-image" src={cake} />
        <img className="showcase-image" src={rolls} />
        <img className="showcase-image" src={burger} />
        <img className="showcase-image" src={icecream} />
      </div>
    </div>
  );
};

export default Showcase;
