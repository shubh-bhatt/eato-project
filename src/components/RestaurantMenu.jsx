import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RATING_SVG2 } from "../utils/constants";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const { area, cost_for_two, description, name, rating } = restaurantMenu;
  // console.log(restaurantMenu.cuisines);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://eato-project-six.vercel.app/data/restaurantMenu.json"
      );
      const data = await res.json();
      const found = data.find((r) => r.id === id);
      setRestaurantMenu(found);
    };

    fetchData();
  }, []);

  console.log(restaurantMenu);

  return (
    <div className="restaurant-menu-container">
      <div className="restaurant-menu-title">
        <h1>{name}</h1>
        <div className="rating-delivery-container">
          <div className="rating-delivery">
            <div className="ratings-and-price">
              <span>{RATING_SVG2}</span>
              <span>{restaurantMenu.rating} ratings</span>
              <span>•</span>
              <span>{restaurantMenu.cost_for_two} cost for two</span>
            </div>
            <div
              style={{
                paddingLeft: "30px",
                paddingTop: "10px",
                fontWeight: "bold",
              }}
            >
              {restaurantMenu.name}
            </div>
            <div className="outlet-and-delivery-time-container">
              <div className="rounded-progress-container">
                <div className="rounded-one"></div>
                <div className="line-for-rounded"></div>
                <div className="rounded-two"></div>
              </div>
              <div className="outlet-and-time-container">
                <div className="outlet-address">
                  <span>Outlet</span>
                  <span>•</span>
                  <span
                    style={{ fontWeight: "500", color: "rgba(2, 6, 12, 0.6)" }}
                  >
                    {restaurantMenu.area}
                  </span>
                </div>
                <div className="time-delivery-time">
                  <span>25-30 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default RestaurantMenu;
