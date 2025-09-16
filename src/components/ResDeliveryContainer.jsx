import ResDeliveryCard from "./ResDeliveryCard";
import { useEffect, useState } from "react";

const ResDeliveryContainer = () => {
  const [restaurantDelivery, setRestaurantDelivery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://eato-project-six.vercel.app/data/restaurantDelivery.json"
        );
        const data = await res.json();
        setRestaurantDelivery(data);
      } catch (err) {
        console.log("Failed to fetch Restaurant Delivery data:", err);
      }
    };

    fetchData();
  }, []);

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
