import { getVenuesValidDataYear } from "../getData/getVenuesValidDataYear";
import { useQuery } from "react-query";
export default function useVenueValidYear(year) {
  return useQuery(["current_venue", year], getVenuesValidDataYear);
}
