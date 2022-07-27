import { Link } from "react-router-dom";
import ImageContainer from "../../image/ImageContainer/ImageContainer";
import "./EventCard.css";
import DateTime from "../../text/DateTime/DateTime";
function EventCard({ link, id, old, title, venue, date, introduction, image }) {
  return (
    <div className="event_card">
      <Link to={`/${link}/${id}`}>
        <div
          className={
            !old ? "event_card__text_top" : "event_card__text_top event_old"
          }
        >
          <h2> {title}</h2>
        </div>
      </Link>
      <div className="event_card__text_middle">
        {venue ? <p>at {venue}</p> : null}
        {old ? (
          <p className="an_old_event">This is an OLD event</p>
        ) : (
          <DateTime date={date} />
        )}
      </div>

      <div className="event_card__text_bottom">
        <p> {introduction}</p>
        {/* <p>
          event id {props.id} venue id {props.venue_id}
        </p> */}
      </div>

      <ImageContainer type="square" source={image} altText={title} />
    </div>
  );
}

export default EventCard;
