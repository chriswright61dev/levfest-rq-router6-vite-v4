import EventsList from "../modules/Events/EventsList/EventsList";
import useEventYear from "../data/queryHooks/useEventYear";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";
function Events() {
  const thisYear = new Date().getFullYear();
  const allEventData = useEventYear(thisYear);

  if (allEventData.isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="content">
        <h1 className="page_h1">Levenshulme Festival Events {thisYear}</h1>

        <EventsList eventListData={allEventData.data} />
        {/* once we have old data add this link */}
        <h4 className="content-text-link">
          <Link to="/eventsyear">Events from Previous Years</Link>
        </h4>
      </div>
    );
  }
}

export default Events;
