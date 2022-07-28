import { getVenuesData } from "../getData/getVenuesData";
import { useQuery } from "react-query";
export default function useBasic() {
  return useQuery(["venue"], getVenuesData);
}
