import React from "react";
import "./ReviewSec.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import CmntTemplate from "./MovieDownloadSectionUI/CmntTemplate";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewTemplate from "./MovieDownloadSectionUI/ReviewTemplate";
function ReviewSec() {
  return (
    <section className="reivew-container">
      <div className="review-secWrapper">
        <div className="comments-container">
          <h1>
            <FontAwesomeIcon className="comment-icon" icon={faComment} />
            <span> 49 Comments</span>
          </h1>
          <div className="all-comments">
            <CmntTemplate />
            <CmntTemplate />
            <CmntTemplate />
            <CmntTemplate />
            <CmntTemplate />
            <CmntTemplate />
            <CmntTemplate />
            <CmntTemplate />
            <CmntTemplate />
            <CmntTemplate />
            <CmntTemplate />
            <div className="load-more-cmnts">
              <a href="" className="load-more-link">
                Load more comments
              </a>
            </div>
          </div>
          <div className="comment-here">
            <a href="">Login to leave a comment</a>
          </div>
        </div>
        <div className="reviews-container">
          <h1 className="review-header">
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            Movie Reviews
          </h1>
          <ReviewTemplate />
        </div>
      </div>
    </section>
  );
}

export default ReviewSec;
