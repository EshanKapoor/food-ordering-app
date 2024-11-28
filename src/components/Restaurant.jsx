const RestaurantCard = (props) => {
  const { name, desc, rating, img_url } = props.resData;

  return (
    <div className="res-card">
      <img className="res-img" src={img_url} alt="" />
      <h2>{name}</h2>
      <h3>{desc}</h3>
      <h3>Rating : {rating}</h3>
    </div>
  );
};

export default RestaurantCard;
