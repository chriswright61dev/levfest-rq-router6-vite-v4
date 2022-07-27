import { getData } from "../getData";
export async function getEventListData() {
  //eventsData
  const thisyear = new Date().getFullYear();
  const url =
    "https://www.levenshulmecommunityfestival.co.uk/api_levfest_events_list/?event_year=" +
    thisyear;

  // console.log(url);
  return getData(url);
}
