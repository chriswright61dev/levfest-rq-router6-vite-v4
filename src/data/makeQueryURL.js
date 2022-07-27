import { siteSettings } from "../config/config";

function makeQueryURL(urlPart, query) {
  return (
    siteSettings.baseurl +
    siteSettings.urlprefix +
    siteSettings.siteabbrv +
    urlPart +
    query
  );
}

export default makeQueryURL;
