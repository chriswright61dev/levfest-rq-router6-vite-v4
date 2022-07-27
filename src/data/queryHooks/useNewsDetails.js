import { getNewsDetailData } from "../getData/getNewsDetailData";
import { useQuery } from "react-query";

function useNewsDetails(id) {
  return useQuery(["newsDetails", id], getNewsDetailData);
}

export default useNewsDetails;
