import "./styles.css";

const SideBar = () => {
  return (
    <div className="SideBar">
      <p>price</p>
      <ul>
        <li>$0.00 - $150.00</li>
        <li>$150.00 - $350.00</li>
        <li>$350.00 - $500.00</li>
        <li>$500.00 - $750.00+</li>
      </ul>
    </div>
  );
};

export { SideBar };
