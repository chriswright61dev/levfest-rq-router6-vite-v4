import "./TimeText.css";
function TimeText({ timeText }) {
  // This is used for non stanard times - just in case
  return timeText ? (
    <h4 className="time_text">'Time TEXT not a date: time'{timeText}</h4>
  ) : null;
}

export default TimeText;
