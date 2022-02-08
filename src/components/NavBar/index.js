// navbar index.js
import styles from "./styles.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="container">
      <div class="green"></div>
      <div class="red"></div>
      <NavLink
        to="/shop"
        className="links"
        style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
      ></NavLink>
    </div>
  );
};

export { NavBar };
