import { getData } from "../getData";

export async function getBasicData() {
  const url =
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_basic_data/";
  return getData(url);
}
