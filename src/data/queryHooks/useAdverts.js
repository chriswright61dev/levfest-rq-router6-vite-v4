import { getAdverts } from "../getData/getAdvertsData";
import { useQuery } from "react-query";
export default function useAdverts() {
  return useQuery(["adverts"], getAdverts);
}
