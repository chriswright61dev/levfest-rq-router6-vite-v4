import React from "react";
import "./FrontPageBigCard.css";
import { Link } from "react-router-dom";
import ImageContainer from "../../../image/ImageContainer/ImageContainer";
function FrontPageBigCard({
  title,
  text,
  bottomText,
  link,
  IMGsource,
  IMGaltText,
  IMGtype,
}) {
  return (
    <div className="front_page_big_card box_drop_shadow">
      <div className="front_page_big_card__text_top">
        <h2>{title}</h2>
      </div>
      <div className="front_page_big_card__text_middle">
        <p>{text}</p>
      </div>

      <div className="front_page_big_card__text_bottom">
        <p>{bottomText}</p>
      </div>
      <div className="front_page_big_card__overlay"></div>
      <Link to={link}>
        <ImageContainer
          source={IMGsource}
          altText={IMGaltText}
          type={IMGtype}
        />
      </Link>
    </div>
  );
}

export default FrontPageBigCard;
