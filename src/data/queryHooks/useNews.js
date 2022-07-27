import { getNewsListData } from "../getData/getNewsListData";
import { useQuery } from "react-query";
export default function useBasic() {
  return useQuery(["news"], getNewsListData);
}
