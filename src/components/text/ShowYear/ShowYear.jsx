import { formatDate } from "../../../utilities/formatDate";

function ShowYear({ date }) {
  if (date) {
    const formattedDate = formatDate(date);
    //  check that the Date Data exists
    // so split errors don't occur in the formatting funcyion
    return <>{formattedDate.year}</>;
  } else {
    return null;
  }
}

export default ShowYear;
