import React from "react";

export default function Head(props) {
  return (
    <div className="head">
      <h2>{props.title}</h2>
      <p>{props.head}</p>
    </div>
  );
}
