import { RATING_SVG } from "../utils/constants";

const TopResCard = (props) => {
  const { area, delivery_time, name, rating, image_url } = props.res;

  return (
    <>
      <div className="top-res-card">
        <div className="top-res-img-container">
          <img className="top-res-img" src={image_url} />
        </div>

        <div className="top-res-details">
          <div className="top-res-name">{name}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "4px" }}>{RATING_SVG}</span>
            <span className="top-res-rating">{rating} rating </span>
            <span className="dot" />
            <span className="top-res-delivery-time"> {delivery_time}</span>
          </div>
          <div className="top-res-area">{area}</div>
        </div>
      </div>
    </>
  );
};

export default TopResCard;
