import useVenues from "../data/queryHooks/useVenues";
import { siteSettings } from "../config/config";
import { Link } from "react-router-dom";
import useVenuesValidYear from "../data/queryHooks/useVenuesValidYear";
import PageTop from "../components/utility/PageTop/PageTop";
import VenueList from "../modules/Venues/VenueList/VenueList";
import filterValidVenues from "../utilities/filterValidVenues";
function Venues() {
  const thisYear = new Date().getFullYear();
  const allVenueData = useVenues();
  // get all the venues
  const validVenueList = useVenuesValidYear(thisYear);
  // get a list of valid venues for a year
  if (allVenueData.isLoading && validVenueList.isLoading) {
    return null;
  } else {
    const VenueData = filterValidVenues(allVenueData.data, validVenueList.data);

    return (
      <div className="content">
        <PageTop />
        <h1 className="page_h1">
          {siteSettings.Name} Venues {thisYear}
        </h1>

        <VenueList venueListData={VenueData} />

        {/* once we have old data enable this link in config settings */}
        {siteSettings.EnablePreviousYears ? (
          <h4 className="content-text-link">
            <Link to="/venuesyear">Venues from Previous Years</Link>
          </h4>
        ) : null}
      </div>
    );
  }
}

export default Venues;
