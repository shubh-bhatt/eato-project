import { RATING_SVG } from "../utils/constants";

const ResDeliveryCard = (props) => {
  // console.log(props.res);
  const { name, rating, delivery_time, area, image_url } = props.res;

  return (
    <div className="res-delivery-card">
      <div className="res-delivery-img-container">
        <img className="res-delivery-img" src={image_url}></img>
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

        <div className="res-delivery-cuisines">{name}</div>
        <div className="res-delivery-area">{area}</div>
      </div>
    </div>
  );
};

export default ResDeliveryCard;
