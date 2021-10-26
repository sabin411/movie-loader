import React from "react";

function Navlinks(props) {
  return (
    <li onClick={props.onClick}>
      <a className={props.className} href={props.links}>
        {props.children}
      </a>
    </li>
  );
}

export default Navlinks;
