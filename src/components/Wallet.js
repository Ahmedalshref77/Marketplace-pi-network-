import React from "react";

function Wallet({ balance }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>المحفظة</h3>
      <p>الرصيد الحالي: {balance} باي</p>
    </div>
  );
}

export default Wallet;
