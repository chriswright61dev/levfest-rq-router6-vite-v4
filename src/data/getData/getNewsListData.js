import { getData } from "../getData";

export async function getNewsListData() {
  //news Data
  const url =
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_news_list/";
  return getData(url);
}
