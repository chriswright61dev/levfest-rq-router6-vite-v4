import NewsList from "../modules/News/NewsList/NewsList";
import { siteSettings } from "../config/config";
import Loader from "../components/Loader/Loader";
import useNews from "../data/queryHooks/useNews";

function News() {
  const allNewsData = useNews();
  if (allNewsData.isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="content">
        <h1 className="page_h1">Latest News about the {siteSettings.Name}</h1>
        <NewsList newsListData={allNewsData.data} />
      </div>
    );
  }
}

export default News;
