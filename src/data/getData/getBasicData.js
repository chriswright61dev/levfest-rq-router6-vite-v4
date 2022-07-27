import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getBasicData() {
  return getData(makeURL("basic_data"));
}
