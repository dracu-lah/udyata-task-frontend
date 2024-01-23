import { useGetProductsByIdQuery } from "@/services/productsApi";
import { Link, useParams } from "react-router-dom";
const ProductPage = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductsByIdQuery(id);
  if (isLoading) {
    return <a href="#" aria-busy="true">Loading The Product...</a>;
  }
  if (error) {
    return "Some Error Occured!";
  }
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <Link to="/" href="#">
              Products
            </Link>
          </li>
          <li>{product.title}</li>
        </ul>
      </nav>
      <div className="grid">
        {product.images.map((image, index) => (
          <img src={image} key={index} className="container-fluid" />
        ))}
      </div>
      <nav>
        <ul>
          <li>
            <hgroup>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </hgroup>
          </li>
        </ul>
        <ul>
          <li>
            <h1>${product.price}</h1>
          </li>
        </ul>
      </nav>
      <a href="#" role="button" className="contrast outline">Book Now</a>
    </div>
  );
};

export default ProductPage;
