import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBackdrop } from "../../features/movieId/ActiveBackdrop";
function Backdrop({ content }) {
  const backdropStat = useSelector((state) => state.backdropState.value);
  const dispatch = useDispatch();
  const backdropStyling = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "rgba(57, 57, 57, .2)",
    backdropFilter: "blur(4px)",
    zIndex: 2000,
  };
  return (
    <section
      onClick={() => {
        dispatch(updateBackdrop(false));
      }}
      style={backdropStyling}
    ></section>
  );
}

export default Backdrop;
