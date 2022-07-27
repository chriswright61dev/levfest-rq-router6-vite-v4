import { getVenuesListData } from "../getData/getVenuesListData";
import { useQuery } from "react-query";
export default function useBasic() {
  return useQuery(["venue"], getVenuesListData);
}
