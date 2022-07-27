import { Link } from "react-router-dom";
import DateTime from "../../../text/DateTime/DateTime";
import "./FrontPageDataCardBlock.css";
import ImageContainer from "../../../image/ImageContainer/ImageContainer";
function FrontPageDataCardBlock({
  link,
  id,
  title,
  date,
  venue,
  newsintro,
  image,
}) {
  return (
    <Link to={`/${link}/${id}`}>
      <div className="front_page_data_card_block">
        <div className="front_page_data_card_block_image box_drop_shadow">
          <ImageContainer type="square" source={image} altText={title} />
        </div>

        <div className="front_page_data_card_block_text">
          <h3>{title}</h3>

          {date ? <DateTime date={date} /> : null}
          {venue ? <p>At {venue}</p> : null}
          {newsintro ? <p>{newsintro}</p> : null}
        </div>
      </div>
    </Link>
  );
}

export default FrontPageDataCardBlock;
