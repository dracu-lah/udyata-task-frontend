import { useGetProductsByIdQuery } from "@/services/productsApi";
import { addCartItems, toggleCartModal } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const ProductPage = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductsByIdQuery(id);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  if (isLoading) {
    return (
      <div style={{ textAlign: "center" }}>
        <a href="#" aria-busy="true">Loading The Product...</a>
      </div>
    );
  }
  if (error) {
    return "Some Error Occured!";
  }
  const isAddedToCart = cartItems.find((item) => item.id === product.id);
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
      <div style={{ display: "flex", gap: 10 }}>
        <a href="#" role="button" className="contrast outline">Book Now</a>
        {isAddedToCart
          ? (
            <a
              href="#"
              role="button"
              className="disabled outline"
              onClick={() => dispatch(toggleCartModal())}
            >
              View Cart
            </a>
          )
          : (
            <a
              href="#"
              role="button"
              onClick={() => {
               const data= dispatch(addCartItems(product));
                toast("Added to Cart",{type:"info"})
              }}
              className="outline"
            >
              Add to Cart
            </a>
          )}
      </div>
    </div>
  );
};

export default ProductPage;
