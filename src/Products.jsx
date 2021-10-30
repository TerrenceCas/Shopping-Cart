import React, { useState } from "react";

export default function Products({addToCart}) {
  const [products] = useState([
    {
      name: "Pizza",
      cost: "$5.00",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    },
    {
      name: "Pasta",
      cost: "$7.00",
      image:
        "https://images.food52.com/mwGFDBeq3scTyFhwHxBRzKOWabI=/1200x900/905edca3-b58c-45be-b588-c4a5983e7e48--2020-1215_pasta-garlic-butter-sauce_3x2_rocky-luten_023.jpg",
    },
  ]);

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
