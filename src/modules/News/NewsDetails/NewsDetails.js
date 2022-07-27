import useNewsDetails from "../../../data/queryHooks/useNewsDetails";
import { useParams } from "react-router-dom";
import NewsDetail from "./NewsDetail/NewsDetail";
import Loader from "../../../components/Loader/Loader";

function NewsDetails() {
  let { id } = useParams();
  const newsDetails = useNewsDetails(id);

  if (newsDetails.status !== "success") {
    return <Loader />;
  } else {
    return <NewsDetail data={newsDetails.data[0]} />;
  }
}
export default NewsDetails;
