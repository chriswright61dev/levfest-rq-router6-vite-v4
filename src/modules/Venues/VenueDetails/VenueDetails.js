import useEvent from "../../../data/queryHooks/useEvent";
import useVenueDetails from "../../../data/queryHooks/useVenueDetails";
import { useParams } from "react-router-dom";
import VenueDetail from "./VenueDetail/VenueDetail";
import Loader from "../../../components/Loader/Loader";
function VenueDetails() {
  let { id } = useParams();
  // get this years events
  const allEventData = useEvent();
  // get venue details
  const venueDetails = useVenueDetails(id);

  if (venueDetails.status !== "success" || allEventData.status !== "success") {
    return <Loader />;
  } else {
    let venueEvents = [];
    const eventListData = allEventData.data;
    // filter the events list to events at this venue
    venueEvents = eventListData.filter((event) => event.event_venue_id === id);
    return (
      <VenueDetail data={venueDetails.data[0]} venueEvents={venueEvents} />
    );
  }
}

export default VenueDetails;

// import useEvent from "../../../data/queryHooks/useEvent";

// import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
// import VenueDetail from "./VenueDetail/VenueDetail";
// import Loader from "../../../components/Loader/Loader";
// function VenueDetails() {
//   const allEventData = useEvent();
//   let { id } = useParams();

//   console.log("allEventData", allEventData);

//   let venueEvents = [];
//   if (allEventData.status === "success") {
//     const eventListData = allEventData.data;
//     // filter the events list to events at this venue
//     venueEvents = eventListData.filter((event) => event.event_venue_id === id);
//   }

//   const {
//     data: venueData,
//     isLoading: isLoadingVD,
//     error: errorVD,
//   } = useQuery(["EventData", id], async () => {
//     const baseUrl = "https://www.levenshulmecommunityfestival.co.uk/";
//     const apiUrl = "api_venues_long?venue_id=";
//     const url = baseUrl + apiUrl + id;
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   });

//   if (isLoadingVD) {
//     return <Loader />;
//   }
//   if (errorVD) {
//     console.log("Oh no, something went wrong with getting the venue");
//   }

//   if (venueData) {
//     return <VenueDetail data={venueData[0]} venueEvents={venueEvents} />;
//   } else {
//     return <Loader />;
//   }
// }

// export default VenueDetails;
