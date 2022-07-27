import React, { useState } from "react";
import useVenue from "../data/queryHooks/useVenue";
import useVenueValidYear from "../data/queryHooks/useVenueValidYear";
import YearSelect from "../components/YearSelect/YearSelect";

import PageTop from "../components/utility/PageTop/PageTop";
import VenueList from "../modules/Venues/VenueList/VenueList";
import filterValidVenues from "../utilities/filterValidVenues";
function VenuesByYear() {
  const thisYear = new Date().getFullYear();
  const [eventYearState, setEventYearState] = useState({
    year: thisYear,
  });

  function changeYear(yearValue) {
    setEventYearState({ year: yearValue });
  }

  const allVenueData = useVenue();
  // get all the venues
  const validVenueList = useVenueValidYear(eventYearState.year);
  // get a list of valid venues for a year

  if (allVenueData.isLoading && validVenueList.isLoading) {
    return null;
  } else {
    const VenueData = filterValidVenues(allVenueData.data, validVenueList.data);

    return (
      <div className="content">
        <PageTop />
        <h1 className="page_h1">
          Manchester Irish Festival Venues {eventYearState.year}
        </h1>
        <YearSelect changeFn={changeYear} />
        <VenueList venueListData={VenueData} />
      </div>
    );
  }
}

export default VenuesByYear;
