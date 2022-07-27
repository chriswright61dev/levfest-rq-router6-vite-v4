import "./HeroContainer.css";
function HeroContainer({ logosource, title, text }) {
  return (
    <div className="hero_container">
      <div className="hero_container__text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="hero_container__logo">
        <img src={logosource} alt="festival logo" />
      </div>
    </div>
  );
}

export default HeroContainer;
