import { getBasicData } from "../getData/getBasicData";
import { useQuery } from "react-query";
export default function useBasic() {
  return useQuery(["basic"], getBasicData);
}
