import NewsDetails from "../modules/News/NewsDetails/NewsDetails";
import { siteSettings } from "../config/config";
function NewsItem() {
  return (
    <div className="content">
      <h1 className="page_h1">{siteSettings.Name} News</h1>
      <NewsDetails />
    </div>
  );
}

export default NewsItem;
