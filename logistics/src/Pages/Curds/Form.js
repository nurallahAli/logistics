import React, { useState, useEffect } from "react";

export default function Form({ btn, insertProduct }) {
  const [getPrice, setPrice] = useState(0);
  const [getTaxes, setTaxes] = useState(0);
  const [getAds, setAds] = useState(0);
  const [getDiscount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [title, setTitle] = useState("");
  const [count, setCount] = useState("");
  const [category, setCategory] = useState("");

  const SumTotal = ()=>{
    const price = parseFloat(getPrice);
    const taxes = parseFloat(getTaxes);
    const ads = parseFloat(getAds);
    const discount = parseFloat(getDiscount);
    if (
      price !== "" &&
      !isNaN(price) &&
      !isNaN(taxes) &&
      !isNaN(ads) &&
      !isNaN(discount)
    ) {
      const totalPrice = price + taxes + ads - discount;
      setTotal(totalPrice);
    }
  }
  useEffect(() => {
    SumTotal();
  }, [getPrice,getTaxes,getAds,getDiscount]);

  const insertData = () => {
    const obj = {
      Price: getPrice,
      Taxes: getTaxes,
      Ads: getAds,
      Discount: getDiscount,
      total: total,
      title: title,
      count: count,
      category: category
    };
    insertProduct(obj);
    clearInputs();
  };

  const clearInputs = () => {
    setPrice("");
    setTaxes("");
    setAds("");
    setDiscount("");
    setTotal("");
    setTitle("");
    setCount("");
    setCategory("");
  };
  return (
    <div className="inputs">
      <input
        placeholder="Title"
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <form id="price">
        <input
          type="number"
          placeholder="Price"
          id="price"
          value={getPrice}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Taxes"
          id="taxes"
          value={getTaxes}
          onChange={(e) => setTaxes(e.target.value)}
        />
        <input
          type="number"
          placeholder="Ads"
          id="ads"
          value={getAds}
          onChange={(e) => setAds(e.target.value)}
        />
        <input
          type="number"
          placeholder="Discount"
          id="discount"
          value={getDiscount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <small id="total">{total}</small>
      </form>
      <input
        placeholder="Count"
        type="number"
        id="count"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <input
        placeholder="Category"
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button id="submit" onClick={insertData}>
        {btn}
      </button>
    </div>
  );
}
