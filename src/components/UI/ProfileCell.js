import React from "react";
import "./ProfileCell.css";
function ProfileCell({ castDetails }) {
  return (
    <div className="profileCell-wrapper" href="#">
      <a href="" className="avatar-wrapper">
        <img
          src={
            castDetails.url_small_image
              ? castDetails.url_small_image
              : `https://img.yts.mx/assets/images/actors/thumb/default_avatar.jpg`
          }
          alt=""
        />
      </a>
      <div className="cast-name">
        <a href="">{castDetails.name}</a>{" "}
        <span>{castDetails.character_name}</span>
      </div>
    </div>
  );
}

export default ProfileCell;
