import { getData } from "../getData";

export function getEventDetailData(queryKey) {
  //event Data
  const id = queryKey.queryKey[1];
  const url =
    "https://www.levenshulmecommunityfestival.co.uk/api_events_long/?event_id=" +
    id;
  return getData(url);
}
