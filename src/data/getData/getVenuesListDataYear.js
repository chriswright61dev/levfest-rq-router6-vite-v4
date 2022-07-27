import { getData } from "../getData";

export async function getVenuesListDataYear() {
  //venue list Data THIS is NOT needed

  const url =
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_venues_list/";
  return getData(url);
}
