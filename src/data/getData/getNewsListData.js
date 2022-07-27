import { getData } from "../getData";
import makeURL from "../makeURL";
export async function getNewsListData() {
  //news Data

  return getData(makeURL("news_list/"));

  // const url =
  //   "https://www.levenshulmecommunityfestival.co.uk/api_levfest_news_list/";
  // return getData(url);
}
