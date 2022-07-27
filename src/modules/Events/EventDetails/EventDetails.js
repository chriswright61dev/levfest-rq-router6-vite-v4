import useEventDetails from "../../../data/queryHooks/useEventDetails";
import { hasDatePassed } from "../../../utilities/hasDatePassed";
import { useParams } from "react-router-dom";
import EventDetail from "./EventDetail/EventDetail.js";
import Loader from "../../../components/Loader/Loader";

function EventDetails() {
  let { id } = useParams();
  // console.log("id", id);
  const eventDetails = useEventDetails(id);
  // console.log("eventDetails", eventDetails);
  // id and data not undefined
  if (eventDetails.status !== "success") {
    return <Loader />;
  } else {
    const HasEventPassed = hasDatePassed(eventDetails.data[0].event_date_time);
    return <EventDetail old={HasEventPassed} data={eventDetails.data[0]} />;
  }
}

export default EventDetails;
