import EventDetails from "../modules/Events/EventDetails/EventDetails";
import { siteSettings } from "../config/config";
function Event() {
  return (
    <div className="content">
      <h1 className="page_h1">A {siteSettings.Name} Event </h1>
      <EventDetails />
    </div>
  );
}

export default Event;
