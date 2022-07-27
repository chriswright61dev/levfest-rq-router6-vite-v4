import { getData } from "../getData";
import makeQueryURLnoSiteAbbrev from "../makeQueryURLnoSiteAbbrev";
export function getVenueDetailData(queryKey) {
  //venue Data
  const id = queryKey.queryKey[1];

  return getData(makeQueryURLnoSiteAbbrev("_venues_long?venue_id=", id));
  //   const url =
  //     "https://www.levenshulmecommunityfestival.co.uk/api_venues_long?venue_id=" +
  //     id;
  //   return getData(url);
}
