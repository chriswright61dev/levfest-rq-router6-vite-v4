// import React from "react";
import "./EmailLink.css";
function EmailLink({ source, linkText }) {
  const link = "mailto:" + source;
  return (
    <p className="email_link">
      <a href={link}>Email: {linkText}</a>
    </p>
  );
}

export default EmailLink;
