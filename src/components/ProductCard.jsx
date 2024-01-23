import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, rating, thumbnail }) => {
  return (
    <Link to={`/${id}`}>
      <img src={thumbnail} />
      <h1>{title}</h1>
    </Link>
  );
};

export default ProductCard;
