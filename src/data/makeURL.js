import { siteSettings } from "../config/config";

function makeURL(urlPart) {
  return (
    siteSettings.baseurl +
    siteSettings.urlprefix +
    siteSettings.siteabbrv +
    urlPart
  );
}

export default makeURL;
