import React, { useState } from "react";
import { siteSettings } from "../config/config";
import useVenues from "../data/queryHooks/useVenues";
import useVenuesValidYear from "../data/queryHooks/useVenuesValidYear";
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

  const allVenueData = useVenues();
  // get all the venues
  const validVenueList = useVenuesValidYear(eventYearState.year);
  // get a list of valid venues for a year

  if (allVenueData.isLoading && validVenueList.isLoading) {
    return null;
  } else {
    const VenueData = filterValidVenues(allVenueData.data, validVenueList.data);

    return (
      <div className="content">
        <PageTop />
        <h1 className="page_h1">
          {siteSettings.Name} Venues {eventYearState.year}
        </h1>
        <YearSelect changeFn={changeYear} />
        <VenueList venueListData={VenueData} />
      </div>
    );
  }
}

export default VenuesByYear;
