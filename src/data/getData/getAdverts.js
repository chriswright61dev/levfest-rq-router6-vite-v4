import { getData } from "../getData";
export async function getAdverts() {
  const url = "https://www.levenshulmecommunityfestival.co.uk/api_levfest_ads";

  return getData(url);
}
