import useVenue from "../data/queryHooks/useVenue";
import { siteSettings } from "../config/config";
import VenueList from "../modules/Venues/VenueList/VenueList";
import Loader from "../components/Loader/Loader";

function VenuesAll() {
  const allVenueData = useVenue();
  // get All the venues - not for general use

  if (allVenueData.isLoading) {
    return <Loader />;
  } else {
    const VenueData = allVenueData.data;

    return (
      <div className="content">
        <h1 className="page_h1">{siteSettings.Name} Venues</h1>

        <VenueList venueListData={VenueData} />
      </div>
    );
  }
}

export default VenuesAll;
