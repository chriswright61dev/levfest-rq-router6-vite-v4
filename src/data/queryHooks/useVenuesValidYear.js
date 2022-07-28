import { getVenuesValidYearData } from "../getData/getVenuesValidYearData";
import { useQuery } from "react-query";
export default function useVenueValidYear(year) {
  return useQuery(["current_venue", year], getVenuesValidYearData);
}
