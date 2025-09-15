import React from "react";

function ProductList({ products, onSelect }) {
  return (
    <div>
      <h2>قائمة المنتجات</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{ cursor: "pointer", margin: "10px 0" }}
            onClick={() => onSelect(product)}
          >
            {product.name} - {product.price} باي
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
