import { formatDate } from "../../../utilities/formatDate";
function ShowMonth({ date }) {
  if (date) {
    const formattedDate = formatDate(date);
    //  check that the Date Data exists
    // so split errors don't occur in the formatting funcyion
    return <>{formattedDate.month}</>;
  } else {
    return null;
  }
}

export default ShowMonth;
