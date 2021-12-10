import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "./CmntTemplate.css";
function CmntTemplate() {
  return (
    <div className="cmnt-wrapper">
      <a href="" className="cmntr-pp">
        <img
          src="	https://img.yts.mx/assets/images/users/thumb/default_avatar.jpg"
          alt=""
        />
      </a>
      <div className="comments">
        <header className="cmntr-info">
          <h4>sabinstha </h4>
          <span className="date-time">September 23, 2021 at 11:32 pm</span>
          <div className="cmnt-likes">
            131{" "}
            <a href="">
              {" "}
              <FontAwesomeIcon
                className="regular-heart-icon"
                icon={faHeart}
              />{" "}
            </a>
          </div>
        </header>
        <p>
          Although watched it on Theatre. I am downloading again so that you
          guys can get seeds.
        </p>
      </div>
    </div>
  );
}

export default CmntTemplate;
