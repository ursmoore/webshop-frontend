// navbar index.js
import styles from "./styles.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="container">
      <div class="containerTwo">
        <div class="containerThree"></div>
        <NavLink
          to="/shop"
          className="links"
          style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
        ></NavLink>
        <h1>NavBar</h1>
      </div>
    </div>
  );
};

export { NavBar };
