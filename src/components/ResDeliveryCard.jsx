const ResDeliveryCard = (props) => {
  // console.log(props.res);
  const { name, rating, delivery_time, area, image_url } = props.res;
  console.log(props.res);

  return (
    <div className="res-delivery-card">
      <div className="res-delivery-img-container">
        <img className="res-delivery-img" src={image_url}></img>
      </div>
      <div className="res-delivery-details">
        <div className="res-delivery-name">{name}</div>
      </div>
    </div>
  );
};

export default ResDeliveryCard;
