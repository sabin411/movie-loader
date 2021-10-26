import React from "react";
import "./ReviewTemplate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function ReviewTemplate() {
  return (
    <>
      <section className="review-wrapper">
        <div className="reviewer-info">
          <span className="prefix">Reviewed by </span>
          phiup
          <span className="reviewer-rating">
            {" "}
            <FontAwesomeIcon className="star-icon" icon={faStar} /> 8 / 2
          </span>
        </div>
        <div className="review-title">
          <p>same story, better details</p>
        </div>
        <div className="full-review">
          <p>
            IMO, i think the super A plus to this movie is the realistic
            application of physics. It shows a more limited spiderman. He must
            operate within parabolic physics and they tie that into the story. I
            thought this spiderman was a more fun, spunkier, angstier Peter
            Parker. He was definitely way more nerdy than Toby Mcguire. <br />
            The addition of Gwen was great and I really look forward to seeing
            how this franchise manages upcoming installments under the new
            label. Dialogue was slightly lame, key point being, "Gwen! Gwen! I
            understand! Your boyfriend is a man of many masks!" CHEESY!!!! My
            other knock was that it spent the entire time developing the angst
            of peter parker and didn't give enough development to Gwen, Aunt
            May, and Doc. Connor. <br />I am a huge marvel guy, so i will
            continue to watch with a sense of forgiveness for the many flaws
            that Comic to Movie translations present. I am glad I waited for DVD
            because so few movies obtain that silver screen quality. If you
            liked this movie check out the other Marvel and DC titles. They are
            doing some decent work.
          </p>
        </div>
      </section>
      <div className="line"></div>
    </>
  );
}

export default ReviewTemplate;
