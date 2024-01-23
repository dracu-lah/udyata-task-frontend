import { Link } from "react-router-dom";

const ProductCard = ({ id, title, description, price, rating, thumbnail }) => {
  return (
    <article>
      <Link to={`/${id}`}>
      <img src={thumbnail} className="container-fluid" />
      </Link>
      <footer>
        <nav>
          <ul>
            <li>
              <hgroup>
                <h2>{title}</h2>
                <p>{description}</p>
              </hgroup>
            </li>
          </ul>
          <ul>
            <li>
              <h3>
                ${price}
              </h3>
            </li>
          </ul>
        </nav>
      </footer>
    </article>
  );
};

export default ProductCard;
