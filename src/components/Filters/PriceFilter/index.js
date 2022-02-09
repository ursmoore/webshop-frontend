import { useState } from "react/cjs/react.development";

const PriceFilter = () => {
  // const [price, setPrice] = useState(null);

  return (
    <div>
      <b>price filter</b>
      <ul>
        <li>$0.00 - $150.00</li>
        <li>$150.00 - $350.00</li>
        <li>$350.00 - $500.00</li>
        <li>$500.00 - $750.00+</li>
      </ul>
    </div>
  );
};

export { PriceFilter };
