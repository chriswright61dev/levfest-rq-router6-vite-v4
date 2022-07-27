import "./AdvertCards.css";
import AdvertCard from "./AdvertCard";
function AdvertCards({ adverts }) {
  console.log("adverts in AdvertCard", adverts);
  if (!adverts || adverts.length === 0) {
    return null;
  } else {
    return (
      <div className="adverts">
        {/* map over array */}

        {adverts.map((advert) => {
          return (
            <AdvertCard
              key={advert.id}
              link={advert.ad_weblink}
              image={advert.ad_image}
              title={advert.title}
            />
          );
        })}
      </div>
    );
  }
}

export default AdvertCards;
