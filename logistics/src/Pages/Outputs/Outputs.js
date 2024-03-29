import React from "react";
import SearchBlock from "./SearchBlock";
import DeleteAll from "./DeleteAll";
import Table from "./Table";

export default function Outputs({ products }) {
  return (
    <div className="outputs">
      <SearchBlock />
      <DeleteAll />
      <Table products={products} />
    </div>
  );
}