import { RATING_SVG } from "../utils/constants";
import { useEffect, useState } from "react";

const ResDeliveryCard = (props) => {
  const { name, rating, delivery_time, area, image_url, discount } = props.res;
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://eato-project-six.vercel.app/data/restaurantMenu.json"
        );
        const data = await res.json();
        setRestaurantMenu(data);
      } catch (err) {
        console.log("Data fetch failed:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="res-delivery-card">
        <div className="res-delivery-img-container">
          <img className="res-delivery-img" src={image_url} />
          <div className="overlay">
            <p className="text">{discount}</p>
          </div>
        </div>
        <div className="res-delivery-details">
          <div className="res-delivery-name">{name}</div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "4px" }}>{RATING_SVG}</span>
            <span className="res-delivery-rating">{rating} rating </span>
            <span className="dot" />
            <span className="res-delivery-time"> {delivery_time}</span>
          </div>

          <div className="res-delivery-cuisines">
            {props.res.cuisines.join(", ")}
          </div>
          <div className="res-delivery-area">{area}</div>
        </div>
      </div>
    </>
  );
};

export default ResDeliveryCard;
