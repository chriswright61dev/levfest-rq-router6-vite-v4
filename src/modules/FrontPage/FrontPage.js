// just show news data

import "./FrontPage.css";
import svglogo from "../../images/levfestlogo.svg";
import herobg from "../../images/hero1.jpg";
import HeroContainer from "../../components/card/FrontPage/HeroContainer/HeroContainer";
import FrontPageNewsDataCard from "../../components/card/FrontPage/FrontPageNewsDataCard/FrontPageNewsDataCard";
import AdvertCards from "../../components/card/AdvertCard/AdvertCards";
function FrontPage({ introText, latestNews, adverts }) {
  return (
    <>
      <AdvertCards adverts={adverts} />
      <HeroContainer logosource={svglogo} text={introText} IMGsource={herobg} />
      <div className="front_page__cards">
        <FrontPageNewsDataCard latestNews={latestNews} />
      </div>
    </>
  );
}

export default FrontPage;
