import React, { useState } from "react";

const data = [
  { id: 0, label: "Home and Kitchen" },
  { id: 1, label: "Furniture" },
  { id: 2, label: "Grocery" },
  { id: 3, label: "Toys" },
  { id: 4, label: "Books" },
];
const productData = [
  {
    id: 0,
    label: "Home and Kitchen",
    productLis: [
      { id: 1, productName: "Cooker", price: "200", company: "preethi" },
      { id: 2, productName: "Stove", price: "1200", company: "preethi" },
      { id: 3, productName: "Vessels", price: "1200", company: "Milton" },
      { id: 4, productName: "Mixie", price: "1200", company: "Butterfly" },
    ],
  },
  {
    id: 1,
    label: "Furniture",
    productLis: [
      { id: 1, productName: "Chair", price: "200", company: "WoodPeak" },
      { id: 1, productName: "Sofa", price: "200", company: "WoodPeak" },
      { id: 1, productName: "Office Chair", price: "200", company: "WoodPeak" },
      { id: 1, productName: "Bed", price: "200", company: "WoodPeak" },
    ],
  },
  {
    id: 2,
    label: "Grocery",
    productLis: [
      { id: 1, productName: "Tea Powder", price: "200", company: "HUL" },
      { id: 1, productName: "Butter", price: "200", company: "HUL" },
      { id: 1, productName: "Chocolate", price: "200", company: "HUL" },
      { id: 1, productName: "Oil", price: "200", company: "Sunflower" },
    ],
  },
  {
    id: 3,
    label: "Toys",
    productLis: [
      { id: 1, productName: "Car", price: "200", company: "PaperBacks" },
      { id: 1, productName: "Dolls", price: "200", company: "PaperBacks" },
      {
        id: 1,
        productName: "Construction Set",
        price: "200",
        company: "PaperBacks",
      },
      { id: 1, productName: "Chess", price: "200", company: "PaperBacks" },
    ],
  },
  {
    id: 4,
    label: "Books",
    productLis: [
      { id: 1, productName: "Harry Potter", price: "200", company: "Kindle" },
      { id: 1, productName: "Science Book", price: "200", company: "Kindle" },
      {
        id: 1,
        productName: "Inspiring Thoughts",
        price: "200",
        company: "Kindle",
      },
      { id: 1, productName: "Passion", price: "200", company: "Kindle" },
    ],
  },
];

function Productlist() {
  const [value, setValue] = useState(0);
  const change = (event) => {
    setValue(+event.target.value);
  };

  return (
    <div className="list-group mt-2">
    <div className="list-group-item animated fadeIn">
    
    
    <div id="product-conatiner">
      <h4 className="text-center"> Product List</h4>
      <div className="row">
        <div className="col-md-4">
          <label>Select Some Products: </label>
          <select
            className="form-select"
            onChange={change}
            defaultValue={value}
          >
            {/* <option selected>Open this select menu</option> */}
            {data.map((item) => (
              <option value={item.id} key={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        <h3>Products:</h3>

        {productData
          .filter((list) => value === list.id)
          .map((prodList) => {
            return (
              <div className="row" key={prodList.id}>
                {prodList.productLis.map((sub, subindex) => (
                  <div className="col-md-6">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title" key={subindex}>
                          {sub.productName}
                        </h5>
                        <p className="card-text">{sub.price}</p>
                        <p className="card-text">
                          <small className="text-muted">{sub.company}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </div>
    </div>
  </div>
  );
}

export default Productlist;
