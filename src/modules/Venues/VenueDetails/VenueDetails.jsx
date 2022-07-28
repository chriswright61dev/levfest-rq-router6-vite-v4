import useEventYear from "../../../data/queryHooks/useEventYear";
import useVenueDetails from "../../../data/queryHooks/useVenueDetails";
import { useParams } from "react-router-dom";
import VenueDetail from "./VenueDetail/VenueDetail";
import Loader from "../../../components/Loader/Loader";
function VenueDetails() {
  let { id } = useParams();
  // get this years events
  const thisYear = new Date().getFullYear();
  const allEventData = useEventYear(thisYear);
  // get venue details
  const venueDetails = useVenueDetails(id);

  if (venueDetails.status !== "success" || allEventData.status !== "success") {
    return <Loader />;
  } else {
    let venueEvents = [];
    const eventListData = allEventData.data;
    // filter the events list to events at this venue
    venueEvents = eventListData.filter((event) => event.event_venue_id === id);
    return (
      <VenueDetail data={venueDetails.data[0]} venueEvents={venueEvents} />
    );
  }
}

export default VenueDetails;
