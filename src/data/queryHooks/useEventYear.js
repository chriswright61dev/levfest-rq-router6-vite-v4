import { getEventListDataYear } from "../getData/getEventListDataYear";
import { useQuery } from "react-query";
export default function useEventYear(year) {
  return useQuery(["event", year], getEventListDataYear);
}
