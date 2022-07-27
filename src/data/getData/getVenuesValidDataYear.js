import { getData } from "../getData";

export async function getVenuesValidDataYear(queryKey) {
  //find valid name list of venues that have events in a year
  // const thisyear = new Date().getFullYear();
  const year = queryKey.queryKey[1];
  // 0 is event, 1 is year
  const url =
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_venues_have_events_year?event_year=" +
    year;
  return getData(url);
}
