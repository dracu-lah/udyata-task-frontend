import {
  removeCartItem,
  removeCartItems,
  toggleCartModal,
} from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartModal = () => {
  const cartActiveState = useSelector((state) => state.cart.cartActiveState);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <dialog
      id="modal-example"
      open={cartActiveState}
      onClick={() => dispatch(toggleCartModal(false))}
    >
      <article
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100vh" }}
      >
        <a
          onClick={() => dispatch(toggleCartModal(false))}
          href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-example"
        >
        </a>
        <hgroup>
          <h3>Cart Items</h3>
        </hgroup>
        <div>
          {cartItems.length !== 0
            ? (
              cartItems.map((product, index) => (
                <nav key={product.id}>
                  <ul>
                    <li>
                      <h6>{product.title}</h6>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a
                        onClick={() => dispatch(removeCartItem(product.id))}
                        href="#"
                        role="button"
                        className="secondary"
                      >
                        <DeleteIcon />
                      </a>
                    </li>
                  </ul>
                </nav>
              ))
            )
            : <p>No Items In The Cart</p>}
          {cartItems.length !== 0 && (
            <a
              href="#"
              role="button"
              onClick={() => dispatch(removeCartItems())}
              className="contrast"
            >
              clear all
            </a>
          )}
        </div>
        <footer>
          <a
            onClick={() => dispatch(toggleCartModal(false))}
            href="#cancel"
            role="button"
            className="secondary"
            data-target="modal-example"
          >
            Cancel
          </a>
          <a
            href="#confirm"
            role="button"
            data-target="modal-example"
            className="danger"
          >
            Buy Now
          </a>
        </footer>
      </article>
    </dialog>
  );
};

const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    height={20}
    width={20}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    />
  </svg>
);

export default CartModal;
