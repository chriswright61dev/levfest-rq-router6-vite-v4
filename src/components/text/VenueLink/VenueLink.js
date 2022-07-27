import { Link } from "react-router-dom";
import "./VenueLink.css";
function VenueLink({ venue_id, venue_name }) {
  return (
    <Link to={`/venues/${venue_id}`}>
      <h3 className="venue_link"> at {venue_name}</h3>
    </Link>
  );
}

export default VenueLink;
