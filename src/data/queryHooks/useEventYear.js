import { getEventsYearData } from "../getData/getEventsYearData";
import { useQuery } from "react-query";
export default function useEventYear(year) {
  return useQuery(["event", year], getEventsYearData);
}
