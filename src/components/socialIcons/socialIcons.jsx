import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = () => {
  return (
    <div className="content__icons">
      <a href="https://twitter.com/WSPSoccer" style={{ color: "#626465" }}>
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>
      <a
        href="https://www.instagram.com/wsp.soccer/"
        style={{ color: "#626465" }}
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
      <a
        href="https://www.facebook.com/worldsoccerplatform"
        style={{ color: "#626465" }}
      >
        <FontAwesomeIcon icon={["fab", "facebook-square"]} />
      </a>
    </div>
  );
};

export default SocialIcons;
