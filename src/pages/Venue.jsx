import VenueDetails from "../modules/Venues/VenueDetails/VenueDetails";
import { siteSettings } from "../config/config";
function Venue({ eventListData }) {
  return (
    <div className="content">
      <div className="container">
        <h1 className="page_h1">A {siteSettings.Name} Venue</h1>
        <VenueDetails eventListData={eventListData} />
      </div>
    </div>
  );
}

export default Venue;
