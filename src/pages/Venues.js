import useVenue from "../data/queryHooks/useVenue";
import useVenueValidYear from "../data/queryHooks/useVenueValidYear";
import filterOutInvalidVenues from "../utilities/filterOutInvalidVenues";
import VenueList from "../modules/Venues/VenueList/VenueList";
import Loader from "../components/Loader/Loader";

function Venues() {
  const thisYear = new Date().getFullYear();
  const allVenueData = useVenue();
  // get all the venues then filter them to those with actual events on

  const validVenueList = useVenueValidYear(thisYear);
  // get a list of valid venues for this year

  if (allVenueData.isLoading && validVenueList.isLoading) {
    return <Loader />;
  } else {
    // const VenueData = allVenueData.data;
    const VenueData = filterOutInvalidVenues(
      allVenueData.data,
      validVenueList.data
    );
    // run the data hrough this filter
    return (
      <div className="content">
        <h1 className="page_h1">Levenshulme Festival Venues</h1>

        <VenueList venueListData={VenueData} />
      </div>
    );
  }
}

export default Venues;
