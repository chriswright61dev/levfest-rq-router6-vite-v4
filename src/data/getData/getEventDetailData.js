import { getData } from "../getData";
import makeQueryURLnoSiteAbbrev from "../makeQueryURLnoSiteAbbrev";
export function getEventDetailData(queryKey) {
  //event Data
  const id = queryKey.queryKey[1];
  return getData(makeQueryURLnoSiteAbbrev("_events_long/?event_id=", id));
}
