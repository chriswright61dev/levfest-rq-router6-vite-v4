import "./YearSelect.css";

function YearSelect({ changeFn }) {
  const thisYear = new Date().getFullYear();
  const lastYear = thisYear - 1;
  const twoYearsAgo = thisYear - 2;
  // const threeYearsAgo = thisYear - 3;
  // const fourYearsAgo = thisYear - 4;

  function handleYearChange(event) {
    changeFn(event.target.value);
  }
  return (
    <div className="year_select">
      <label for="year-select">Select a year:</label>
      <select name="year" id="year-select" onChange={handleYearChange}>
        <option selected="selected" value={thisYear}>
          {thisYear}
        </option>
        <option value={lastYear}>{lastYear}</option>
        <option value={twoYearsAgo}>{twoYearsAgo}</option>
        {/* <option value={threeYearsAgo}>{threeYearsAgo}</option> */}
        {/* <option value={fourYearsAgo}>{fourYearsAgo}</option> */}
      </select>
    </div>
  );
}

export default YearSelect;
