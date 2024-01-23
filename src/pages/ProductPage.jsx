import { useGetProductsByIdQuery } from "@/services/productsApi";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductsByIdQuery(id);
  if (isLoading) {
    return "Loading...";
  }
  if (error) {
    return "Some Error Occured!";
  }
  return (
    <div>
      {product.images.map((image, index) => <img src={image} key={index} />)}
      <h1>{product.title}</h1>
      <h3>Price:{product.price}</h3>
      <h3>Rating:{product.rating}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
