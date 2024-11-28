import RestaurantCard from "./Restaurant";
import { useState } from "react";

const arr = [
  {
    name: "Jalebi by Sanam",
    desc: "Sweets and Savouries",
    rating: 4.5,
    img_url:
      "https://media.istockphoto.com/id/1159362325/photo/bread-pakora.jpg?s=612x612&w=0&k=20&c=93uILcInCMXroXgjEJYXNeUzWh5NASSrEnylAgW7hcs=",
  },
  {
    name: "Anu's Kitchen",
    desc: "Taste mein best",
    rating: 5,
    img_url:
      "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Masala Junction",
    desc: "Agle din paper aag pakad lega",
    rating: 3,
    img_url:
      "https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Rajdhani",
    desc: "Kha Kha ke mar jaoge itna khilayenge",
    rating: 3.5,
    img_url:
      "https://images.pexels.com/photos/8819258/pexels-photo-8819258.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Gadbad King",
    desc: "Poty laga denge",
    rating: 1,
    img_url:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Cake Da Dhaba",
    desc: "Cake Shake and Juices",
    rating: 4,
    img_url:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "The Smok'en Bowl",
    desc: "🔥 Aag laga denge Aag 🔥",
    rating: 2.5,
    img_url:
      "https://images.pexels.com/photos/2819094/pexels-photo-2819094.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Puchka",
    desc: "Street Food",
    rating: 5,
    img_url:
      "https://images.pexels.com/photos/12318206/pexels-photo-12318206.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Body = () => {
  console.log("Body is rendered");

  /*we first need to set the state variable 'restaurants' with some value. 
  Here arr is assigned to 'restaurants'. The state variable later gets modified when we filter it.
  This <Body/> functional component or shall I say function gets executed again (re-rendered) when 
  the state variable is updated.*/
  const [restaurants, setRestaurants] = useState(arr);

  function filterRestaurants(restaurants) {
    const filteredList = restaurants.filter((r) => r.rating >= 4);
    setRestaurants(filteredList);
  }

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="restaurant name" />
        <button className="search-btn">Search</button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => filterRestaurants(restaurants)}
        >
          Top Rated Restaurants 🔥
        </button>
      </div>

      <div className="res-container">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
