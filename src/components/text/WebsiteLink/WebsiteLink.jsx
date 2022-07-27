import "./WebsiteLink.css";
function WebsiteLink({ source, linkText }) {
  return (
    <p className="website_link">
      <a href={source} target="_blank" rel="noopener noreferrer">
        WebSite: {linkText}
      </a>
    </p>
  );
}

export default WebsiteLink;
