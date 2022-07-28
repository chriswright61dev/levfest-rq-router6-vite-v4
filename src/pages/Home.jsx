import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";
import { siteSettings } from "../config/config";
import FrontPage from "../modules/FrontPage/FrontPage";

// data hooks
import useBasic from "../data/queryHooks/useBasic";
import useNews from "../data/queryHooks/useNews";
import useAdverts from "../data/queryHooks/useAdverts";

function Home() {
  const thisyear = new Date().getFullYear();
  const basicFestivalData = useBasic();

  const allNewsData = useNews();
  // gets all the news -  cap at 20 on the api
  const allAdvertsData = useAdverts();

  if (basicFestivalData.isLoading || allNewsData.isLoading) {
    return <Loader />;
    // maybe add placeholder component with text to read until data is loaded
  } else {
    const festData = basicFestivalData.data[0]; //only 1 row
    const newsData = allNewsData.data;
    const advertsData = allAdvertsData.data;
    let NewsPostSize = 6;
    const latestNews = newsData.slice(0, NewsPostSize);

    return (
      <div className="content centre-all">
        <h1 className="page_h1">
          The {siteSettings.Name} {thisyear}
        </h1>

        <FrontPage
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
