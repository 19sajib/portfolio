import React from "react";
function PreLoader(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default PreLoader;