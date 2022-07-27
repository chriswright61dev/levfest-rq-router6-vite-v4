import { getData } from "../getData";

export function getNewsDetailData(queryKey) {
  //event Data
  const id = queryKey.queryKey[1];
  const url =
    "https://www.levenshulmecommunityfestival.co.uk/api_news_long?news_id=" +
    id;
  return getData(url);
}
