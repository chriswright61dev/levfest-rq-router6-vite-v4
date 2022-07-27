export default function filterOutInvalidVenues(allData, validList) {
  // make list of venues with events in the year

  // make sure the data is valid
  if (allData && validList) {
    // make it a set to remove duplicates then back to array
    // because sets methods are poor
    const validVenues = Array.from(
      new Set(validList.map(({ venue }) => venue))
    );
    //filter out the venues with no events

    return allData.filter((x) => validVenues.includes(x.venue_title));
  }
  return [];
}
