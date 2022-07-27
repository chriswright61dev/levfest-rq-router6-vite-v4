import { getData } from "../getData";
import makeQueryURL from "../makeQueryURL";
export async function getEventListData() {
  //eventsData
  const thisyear = new Date().getFullYear();
  return getData(makeQueryURL("events_list/?event_year=", thisyear));
}
