import ResDeliveryCard from "./ResDeliveryCard";
import { restaurantDelivery } from "../../public/data/restaurantDelivery";
import { useEffect, useState } from "react";

const ResDeliveryContainer = () => {
  const [restaurantDelivery, setRestaurantDelivery] = useState([]);

  useEffect(() => {}, []);
  return (
    <div className="res-delivery-container">
      <div className="res-delivery-title">
        Restaurants with online food delivery in Agra
      </div>
      <div className="res-delivery">
        {restaurantDelivery.map((res) => {
          return <ResDeliveryCard key={res.id} res={res} />;
        })}
      </div>
      <div className="horizontal-line-last"></div>
    </div>
  );
};

export default ResDeliveryContainer;
