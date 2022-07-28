import { getData } from "../getData";
import makeQueryURL from "../makeQueryURL";
export function getNewsDetailData(queryKey) {
  const id = queryKey.queryKey[1];
  return getData(makeQueryURLnoSiteAbbrev("_news_long?news_id=", id));

  //   const url =
  //     "https://www.levenshulmecommunityfestival.co.uk/api_news_long?news_id=" +
  //     id;
  //   return getData(url);
}
