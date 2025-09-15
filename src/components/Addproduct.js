import React, { useState } from "react";

function AddProduct({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("الرجاء إدخال اسم المنتج والسعر!");
      return;
    }
    onAdd({ name, price: parseFloat(price), description });
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>إضافة منتج جديد</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="اسم المنتج"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="السعر"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="الوصف"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">إضافة</button>
      </form>
    </div>
  );
}

export default AddProduct;
