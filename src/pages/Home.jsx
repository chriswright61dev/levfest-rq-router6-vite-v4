// lets simplify this page - just adverts news and logo?
import FrontPage from "../modules/FrontPage/FrontPage";
import Loader from "../components/Loader/Loader";
// data hooks
import useBasic from "../data/queryHooks/useBasic";
// import useEvent from "../data/queryHooks/useEvent";
import useNews from "../data/queryHooks/useNews";
// import useVenue from "../data/queryHooks/useVenue";
import useAdverts from "../data/queryHooks/useAdverts";
// other components

function Home() {
  const thisyear = new Date().getFullYear();
  const basicFestivalData = useBasic();

  const allNewsData = useNews();
  // gets all the news -  cap at 20 on the api
  const allAdvertsData = useAdverts();

  // const allVenueData = useVenue();
  // gets this years data
  // const allEventData = useEvent();
  // gets this years data

  if (
    basicFestivalData.isLoading ||
    // allVenueData.isLoading ||
    // allEventData.isLoading ||
    allNewsData.isLoading
  ) {
    return <Loader />;
    // maybe add placeholder component with text to read until data is loaded
  } else {
    const festData = basicFestivalData.data[0]; //only 1 row
    // const eventData = allEventData.data;
    const newsData = allNewsData.data;
    // const venueData = allVenueData.data;
    const advertsData = allAdvertsData.data;
    // let NewsPostSize = 4;
    let NewsPostSize = 9;
    const latestNews = newsData.slice(0, NewsPostSize);
    // const eventHighlights = eventData.filter(
    //   (event) => event.event_highlight === "highlight"
    // );

    // const venueHighlights = venueData.filter(
    //   (venue) => venue.venue_highlight === "highlight"
    // );
    return (
      <div className="content">
        <h1 className="page_h1">The Levenshulme Festival {thisyear}</h1>

        <FrontPage
          news_bg={festData.news_header_bg_image}
          event_bg={festData.event_header_bg_image}
          venue_bg={festData.venue_header_bg_image}
          introText={festData.festival_intro}
          // event_highlights={eventHighlights}
          latestNews={latestNews}
          // venueHighlights={venueHighlights}
          adverts={advertsData}
        />
      </div>
    );
  }
}

export default Home;
