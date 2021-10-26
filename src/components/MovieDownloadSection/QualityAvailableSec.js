import React, { useState, useEffect } from "react";
import "./QualityAvailableSec.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faClosedCaptioning } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
function QualityAvailableSec({ data }) {
  const [activeTab, setActiveTab] = useState("0");
  const [qualityTabsInfo, setQualityTabsInfo] = useState();
  useEffect(() => {
    if (data) setQualityTabsInfo(data.torrents[0]);
  }, [data]);
  const durationConverter = (num) => {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + " hr " + minutes + " min";
  };
  var renderComp = data ? (
    <section className="available-movie-quality">
      <div className="available-movies-quality-wrapper">
        <div className="top-header">
          {data.torrents.map((item, i) => {
            return (
              <div
                onClick={(e) => {
                  setActiveTab(i.toString());
                  setQualityTabsInfo(item);
                }}
                className={`tabs ${activeTab === i.toString() ? "active" : ""}`}
                key={i}
              >
                {item.quality}.{item.type.substring(0, 3)}
              </div>
            );
          })}
        </div>
        <div className="quality-specs">
          <div className="row1">
            <div className="row1-file_size">
              <span>
                <FontAwesomeIcon icon={faFolderOpen} />
              </span>
              {qualityTabsInfo && qualityTabsInfo.size}
            </div>
            <div className="row1-resolution">
              <span>
                <FontAwesomeIcon icon={faExpandArrowsAlt} />
              </span>
              1226*720
            </div>
            <div className="row1-polish">
              <span>
                <FontAwesomeIcon icon={faVolumeUp} />
              </span>
              Polish 2.0
            </div>
            <div className="row1-rating">
              <span>
                <FontAwesomeIcon icon={faEye} />
              </span>
              {data.mpa_rating ? data.mpa_rating : `NR`}
              {/* {data.mpa_rating || `NR`} */}
            </div>
          </div>
          {/* row two starting */}
          <div className="row2">
            <div className="row2-subtitle">
              <span>
                <FontAwesomeIcon icon={faClosedCaptioning} />
              </span>
              Subtitle
            </div>
            <div className="row2-fps">
              <span>
                <FontAwesomeIcon icon={faFilm} />
              </span>
              23.97fps
            </div>
            <div className="row2-duration">
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              {durationConverter(data.runtime)}
            </div>
            <div className="row2-peers-seeds">
              <span>P/S</span>
              {qualityTabsInfo &&
                qualityTabsInfo.peers + `/` + qualityTabsInfo.seeds}
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    "nothing to show"
  );
  return renderComp;
}

export default QualityAvailableSec;
