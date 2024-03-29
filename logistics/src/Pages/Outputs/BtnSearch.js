import React from "react";

export default function BtnSearch(props) {
  return (
    <div className="btnSearch">
      <button className="searchTitle">{props.searchTitle}</button>
      <button className="searchCategory">{props.searchCategory}</button>
    </div>
  );
}
