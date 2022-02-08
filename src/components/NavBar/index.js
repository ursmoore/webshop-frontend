// navbar index.js
import styles from "./styles.css";
import { NavLink } from "react-router-dom";
import { GiShoppingCart, GiHearts } from "react-icons/gi";

const NavBar = () => {
  return (
    <div class="container">
      <div class="green"></div>
      <NavLink
        to="/shop"
        className="links"
        style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
      ></NavLink>
      <div class="red"></div>
      <div class="icons">
        <div>
          <GiShoppingCart />
          <GiHearts />
        </div>
      </div>
    </div>
  );
};

export { NavBar };
