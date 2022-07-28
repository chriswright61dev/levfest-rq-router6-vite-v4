import { getData } from "../getData";
import makeQueryURL from "../makeQueryURL";
export async function getVenuesValidYearData(queryKey) {
  //find valid name list of venues that have events in a year
  const year = queryKey.queryKey[1];
  // 0 is event, 1 is year

  return getData(makeQueryURL("venues_have_events_year?event_year=", year));
}
