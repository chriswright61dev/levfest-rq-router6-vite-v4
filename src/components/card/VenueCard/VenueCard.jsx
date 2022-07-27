import { Link } from "react-router-dom";
import ImageContainer from "../../image/ImageContainer/ImageContainer";
import "./VenueCard.css";
function VenueCard({ id, link, title, introduction, image }) {
  return (
    <div className="venue_card">
      <Link to={`/${link}/${id}`}>
        <div className="venue_card__text_top">
          <h2> {title}</h2>
        </div>
      </Link>
      <div className="venue_card__text_bottom">
        <p> {introduction}</p>
      </div>
      <ImageContainer type="square" source={image} altText={title} />
    </div>
  );
}

export default VenueCard;
