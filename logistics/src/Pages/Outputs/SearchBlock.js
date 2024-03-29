import React from "react";
import BtnSearch from "./BtnSearch";

export default function SearchBlock() {
  return (
    <div className="searchBlock">
      <input type="text" placeholder="Search" className="search" />
      <BtnSearch
        searchTitle="Search By Title"
        searchCategory="Search By Category"
      />
    </div>
  );
}
