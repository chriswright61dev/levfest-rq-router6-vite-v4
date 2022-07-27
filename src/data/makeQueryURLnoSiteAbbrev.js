import { siteSettings } from "../config/config";

function makeQueryURLnoSiteAbbrev(urlPart, query) {
  return siteSettings.baseurl + siteSettings.urlprefix + urlPart + query;
}

export default makeQueryURLnoSiteAbbrev;
