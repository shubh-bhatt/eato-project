import { RATING_SVG } from "../utils/constants";

const ResDeliveryCard = (props) => {
  const { name, rating, delivery_time, area, image_url, discount } = props.res;

  return (
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
  );
};

export default ResDeliveryCard;
