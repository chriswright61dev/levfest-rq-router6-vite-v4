import { useState } from "react";
import YearSelect from "../components/YearSelect/YearSelect";
import EventsList from "../modules/Events/EventsList/EventsList";
import useEventYear from "../data/queryHooks/useEventYear";
import Loader from "../components/Loader/Loader";
function EventsOld() {
  const thisYear = new Date().getFullYear();
  // add some state for the year and a dropdown to change it
  const [eventYearState, setEventYearState] = useState({
    year: thisYear,
  });
  function changeYear(yearValue) {
    setEventYearState({ year: yearValue });
  }
  const allEventData = useEventYear(eventYearState.year);

  // get data by year
  if (allEventData.isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="content">
        <h1 className="page_h1">
          Levenshulme Festival Events from {eventYearState.year}
        </h1>
        <YearSelect changeFn={changeYear} />
        <EventsList eventListData={allEventData.data} />
      </div>
    );
  }
}

export default EventsOld;
