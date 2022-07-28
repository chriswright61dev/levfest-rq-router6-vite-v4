import { getData } from "../getData";
import makeQueryURL from "../makeQueryURL";
export async function getEventsYearData(queryKey) {
  const year = queryKey.queryKey[1];
  // 0 is event, 1 is year
  return getData(makeQueryURL("events_list/?event_year=", year));
}
