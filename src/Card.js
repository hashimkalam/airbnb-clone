import React from "react";
import "./Card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

function Card({ src, title, rating, distance, date, price }) {
  return (
    <div className="card">
      <div className="card__imageInfo">
        <FavoriteBorderIcon className="card__imageFav" />
        <img src={src} alt="" />
      </div>

      <div className="card__info">
        <div className="card__infoTop">
          <h2> {title} </h2>
          <div className="card__infoRating">
            <StarIcon className="card__infoRatingIcon" />
            {rating}
          </div>
        </div>

        <h3>{distance}</h3>
        <h3>{date}</h3>
        <h4>
          <b>{price}</b> night
        </h4>
      </div>
    </div>
  );
}

export default Card;
