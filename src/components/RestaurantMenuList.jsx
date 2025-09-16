import { DESIGN_LEFT } from "../utils/constants";
import { DESIGN_RIGHT } from "../utils/constants";
import RestaurantMenuListRecommended from "./RestaurantMenuListRecommended";

const RestaurantMenuList = ({ restaurantMenu }) => {
  // console.log(restaurantMenu);
  return (
    <div className="restaurant-menu-main-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <h1>{DESIGN_LEFT}</h1>
        <h1 style={{ color: "rgba(2, 6, 12, 0.6)", fontWeight: "bold" }}>
          MENU
        </h1>
        <h1>{DESIGN_RIGHT}</h1>
      </div>
      <div className="horizontal-line"></div>
      <h1 style={{ fontWeight: "800", padding: "10px" }}>
        Recommended (
        {!restaurantMenu?.cuisines?.length
          ? "Loading..."
          : restaurantMenu?.cuisines?.length + 1}
        )
      </h1>

      <RestaurantMenuListRecommended restaurantMenu={restaurantMenu} />
    </div>
  );
};

export default RestaurantMenuList;
