import { getData } from "../getData";

export function getVenueDetailData(queryKey) {
  //venue Data
  const id = queryKey.queryKey[1];
  const url =
    "https://www.levenshulmecommunityfestival.co.uk/api_venues_long?venue_id=" +
    id;
  return getData(url);
}
