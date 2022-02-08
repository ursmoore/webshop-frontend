import "./styles.css";

const ProductCardComponent = (props) => {
  const { id, title, price, rating, mainImage } = props.products;

  return (
    <div className="block" key={id}>
      <div className="ImageProduct">
        <img style={{ width: 200 }} src={mainImage} alt={title} />
      </div>
      <div className="informationProduct">
        <h3>{title}</h3>
        <p>price: ${price}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export { ProductCardComponent };
