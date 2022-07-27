import { getData } from "../getData";
import makeURL from "../makeURL";
export async function getVenuesListData() {
  //venue list Data
  return getData(makeURL("venues_list/"));
  // const url =
  //   "https://www.levenshulmecommunityfestival.co.uk/api_levfest_venues_list/";
  // return getData(url);
}
