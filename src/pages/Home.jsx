import { Link } from "react-router-dom";
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
    const newsData = allNewsData.data;
    const advertsData = allAdvertsData.data;
    let NewsPostSize = 6;
    const latestNews = newsData.slice(0, NewsPostSize);

    return (
      <div className="content">
        <h1 className="page_h1">The Levenshulme Festival {thisyear}</h1>

        <FrontPage
          news_bg={festData.news_header_bg_image}
          event_bg={festData.event_header_bg_image}
          venue_bg={festData.venue_header_bg_image}
          introText={festData.festival_intro}
          latestNews={latestNews}
          adverts={advertsData}
        />

        <h4 className="content-text-link">
          <Link to="/news">More News</Link>
        </h4>
      </div>
    );
  }
}

export default Home;
