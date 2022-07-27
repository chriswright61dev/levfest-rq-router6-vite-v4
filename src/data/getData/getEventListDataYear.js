import { getData } from "../getData";

export async function getEventListDataYear(queryKey) {
  const year = queryKey.queryKey[1];
  // 0 is event, 1 is year
  const url =
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_events_list/?event_year=" +
    year;
  return getData(url);
}
