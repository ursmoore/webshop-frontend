// ShopPage index.js
import { ShopPageComponent, SideBar, Footer } from "../../components";
import "./styles.css";

const ShopPage = () => {
  return (
    <div className="mainContainer">
      <SideBar />
      <ShopPageComponent />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export { ShopPage };
