import "./styles.css";
import { PriceFilter } from "../Filters/PriceFilter";
import { CategoryFilter } from "../Filters/CategoryFilter";
import { RatingFilter } from "../Filters/RatingFilter";

const SideBar = () => {
  return (
    <div className="SideBar">
      <CategoryFilter />
      <RatingFilter />
      <PriceFilter />
    </div>
  );
};

export { SideBar };
