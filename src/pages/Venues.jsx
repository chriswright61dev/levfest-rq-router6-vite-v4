import useVenue from "../data/queryHooks/useVenue";
import { Link } from "react-router-dom";
import useVenueValidYear from "../data/queryHooks/useVenueValidYear";
import PageTop from "../components/utility/PageTop/PageTop";
import VenueList from "../modules/Venues/VenueList/VenueList";
import filterValidVenues from "../utilities/filterValidVenues";
function Venues() {
  const thisYear = new Date().getFullYear();
  const allVenueData = useVenue();
  // get all the venues
  const validVenueList = useVenueValidYear(thisYear);
  // get a list of valid venues for a year

  if (allVenueData.isLoading && validVenueList.isLoading) {
    return null;
  } else {
    const VenueData = filterValidVenues(allVenueData.data, validVenueList.data);

    return (
      <div className="content">
        <PageTop />
        <h1 className="page_h1">Manchester Irish Festival Venues {thisYear}</h1>

        <VenueList venueListData={VenueData} />

        {/* once we have old data add this link */}
        <h4 className="content-text-link">
          <Link to="/venuesyear">Venues from Previous Years</Link>
        </h4>
      </div>
    );
  }
}

export default Venues;
