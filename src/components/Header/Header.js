import "./Header.css";
import useBasic from "../../data/queryHooks/useBasic";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import svglogo from "../../images/levfestlogo.svg";
import Loader from "../../components/Loader/Loader";
function Header() {
  const basicFestivalData = useBasic();

  if (basicFestivalData.isLoading) {
    return <Loader />;
  } else {
    const festData = basicFestivalData.data[0];
    return (
      <header>
        <HeaderLogo logosource={svglogo} />
        <div className="header_text">
          <h3> {festData.festival_title}</h3>
          <h4>{festData.festival_dates}</h4>
        </div>
      </header>
    );
  }
}

export default Header;
