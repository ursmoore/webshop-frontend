// ShopPage index.js
import { ShopPageComponent, SideBar } from "../../components";
import "./styles.css";

const ShopPage = () => {
  return (
    <div className="mainContainer">
      <SideBar />
      <ShopPageComponent />
    </div>
  );
};

export { ShopPage };
