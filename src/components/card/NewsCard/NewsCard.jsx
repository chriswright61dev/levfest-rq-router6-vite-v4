import { Link } from "react-router-dom";
import "./NewsCard.css";
import ImageContainer from "../../image/ImageContainer/ImageContainer";
function NewsCard({ id, link, title, introduction, image }) {
  return (
    <div className="news_card">
      <Link to={`/${link}/${id}`}>
        <div className="news_card__text_top">
          <h2>{title}</h2>
        </div>
        <div className="news_card__text_bottom">
          <p> {introduction}</p>
        </div>
        <ImageContainer type="square" source={image} altText={title} />

        {/* <p> {id}</p> */}
      </Link>
    </div>
  );
}

export default NewsCard;
