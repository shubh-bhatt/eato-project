import { RES_MENU_IMG } from "../utils/constants";
import { RATING_SVG2 } from "../utils/constants";

const RestaurantMenuListRecommended = ({ restaurantMenu }) => {
  return restaurantMenu?.cuisines?.map((cuisine, index) => {
    return (
      <div key={index} className="recommended-list-container">
        <div className="recommended-list-details-container">
          <span
            style={{
              fontWeight: "bold",
              paddingLeft: "10px",
              paddingTop: "10px",
            }}
          >
            {cuisine.name}
          </span>
          <span
            style={{
              fontWeight: "bold",
              paddingLeft: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            {cuisine.price == Number(cuisine.price)
              ? `₹${cuisine.price / 100}`
              : cuisine.price}
          </span>
          <span
            style={{
              paddingLeft: "10px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {RATING_SVG2}
            {cuisine.rating} ratings
          </span>
          <span className="recommended-list-desc">{cuisine.description}</span>
        </div>
        <div className="recommended-list-image">
          <img src={RES_MENU_IMG + cuisine.image_url} />
          <button>ADD</button>
        </div>
      </div>
    );
  });
};

export default RestaurantMenuListRecommended;
