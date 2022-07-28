import "./GStreetView.css";
import { siteSettings } from "../../../config/config";

function GStreetView({ latitude, longitude, heading, pitch }) {
  const baseUrl = "https://www.google.com/maps/embed/v1/";
  const Gkey = "?key=" + siteSettings.MapAPIKEY;
  const locationText = `&location=
  ${latitude},
  ${longitude}`;
  const headingText = `&heading=${heading}`;
  const pitchText = `&pitch=${pitch}`;

  const sviewsrc =
    baseUrl + "streetview" + Gkey + locationText + headingText + pitchText;

  return (
    <div className="gstreetview">
      <iframe
        title="streetview"
        width="100%"
        height="100%"
        src={sviewsrc}
      ></iframe>
    </div>
  );
}

export default GStreetView;
