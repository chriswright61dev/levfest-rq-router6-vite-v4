import { formatDate } from "../../../utilities/formatDate";
import "./DateTime.css";
function DateTime({ date }) {
  if (date) {
    const formattedDate = formatDate(date);
    //  check that the Date Data exists
    // so split errors don't occur in the formatting function
    return (
      <h3 className="date_time">
        {formattedDate.dayofweek} {formattedDate.daysuffix}
        {" of "}
        {formattedDate.month} at {formattedDate.ampm}
      </h3>
    );
  } else {
    return null;
  }
}

export default DateTime;
