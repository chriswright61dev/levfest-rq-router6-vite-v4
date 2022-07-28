import { getData } from "../getData";
import makeURL from "../makeURL";

export async function getAdverts() {
  return getData(makeURL("ads"));
}
