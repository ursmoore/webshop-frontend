import "./styles.css";

const DetailsCard = (props) => {
  const { id, title, price, description, rating, mainImage } = props.product;

  return (
    <div className="block" key={id}>
      <div className="productImage">
        <div>
          <img style={{ width: 200 }} src={mainImage} alt={title} />
        </div>
      </div>
      <div className="informationProductBlock">
        <h3 className="productInfo">{title}</h3>
        <p className="productInfo">{description}</p>
        <p className="productInfo">price: ${price}</p>
        <p className="productInfo">Rating: {rating}</p>
      </div>
    </div>
  );
};

export { DetailsCard };
