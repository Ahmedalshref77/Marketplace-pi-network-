import React from "react";

function ProductDetails({ product, onBuy }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>تفاصيل المنتج</h2>
      <p><strong>الاسم:</strong> {product.name}</p>
      <p><strong>الوصف:</strong> {product.description}</p>
      <p><strong>السعر:</strong> {product.price} باي</p>
      <button onClick={() => onBuy(product)}>شراء</button>
    </div>
  );
}

export default ProductDetails;
