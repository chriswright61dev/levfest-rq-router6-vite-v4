import "./Gmap.css";
import { siteSettings } from "../../../config/config";
function GMap({ latitude, longitude, querytext }) {
  const baseUrl = "https://www.google.com/maps/embed/v1/";
  const Gkey = "?key=" + siteSettings.MapAPIKEY;
  const center = `&center=${latitude},${longitude}`;
  const mapquery = `&q=${querytext}`;
  const zoom = "&zoom=18";
  const mapsrc = baseUrl + "place" + Gkey + mapquery + center + zoom;

  return (
    <div className="gmap">
      <iframe title="map" width="100%" height="100%" src={mapsrc}></iframe>
    </div>
  );
}

export default GMap;
