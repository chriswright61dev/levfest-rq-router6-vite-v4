import EventsList from "../modules/Events/EventsList/EventsList";
import useEventYear from "../data/queryHooks/useEventYear";
import Loader from "../components/Loader/Loader";
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
      </div>
    );
  }
}

export default Events;
