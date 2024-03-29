import React from "react";

export default function Table({ products }) {
  console.log("Table component - Products:", products); // Log the value of products

  const deleteData = (index) =>{
    console.log("=> index", index);
    // products.splice(index, 1)
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>taxes</th>
            <th>ads</th>
            <th>discount</th>
            <th>total</th>
            <th>category</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.title}</td>
              <td>{e.Price}</td>
              <td>{e.Taxes}</td>
              <td>{e.Ads}</td>
              <td>{e.Discount}</td>
              <td>{e.total}</td>
              <td>{e.category}</td>
              <td>
                <button>update</button>
              </td>
              <td>
                <button onClick={deleteData(index)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
