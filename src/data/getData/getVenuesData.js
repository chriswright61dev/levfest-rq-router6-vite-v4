import { getData } from "../getData";
import makeURL from "../makeURL";
export async function getVenuesData() {
  return getData(makeURL("venues_list/"));
}
