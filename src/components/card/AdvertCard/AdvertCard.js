import "./AdvertCard.css";
function AdvertCard({ image, link, title }) {
  return (
    <a href={link}>
      <div className="advert">
        <img src={image} alt={title} />
      </div>
    </a>
  );
}

export default AdvertCard;
