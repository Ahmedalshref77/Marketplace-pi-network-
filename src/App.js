import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Wallet from "./components/Wallet";
import AddProduct from "./components/AddProduct";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "منتج تجريبي", price: 10, description: "وصف المنتج" },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [walletBalance, setWalletBalance] = useState(100);

  const addProduct = (product) => {
    setProducts([...products, { id: products.length + 1, ...product }]);
  };

  const buyProduct = (product) => {
    if (walletBalance >= product.price) {
      setWalletBalance(walletBalance - product.price);
      alert(`تم شراء ${product.name} بنجاح!`);
    } else {
      alert("رصيد المحفظة غير كافٍ!");
    }
  };

  return (
    <div style={{ padding: "20px", direction: "rtl" }}>
      <h1>متجر باي</h1>
      <Wallet balance={walletBalance} />
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onSelect={setSelectedProduct} />
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onBuy={buyProduct} />
      )}
    </div>
  );
}

export default App;
