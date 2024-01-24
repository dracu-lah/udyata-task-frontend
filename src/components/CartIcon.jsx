import { toggleCartModal } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {
  const itemCount = useSelector((state) => state.cart.cartItems.length);
  const dispatch = useDispatch();

  return (
    <div
      style={styles.cartContainer}
      onClick={() => dispatch(toggleCartModal())}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        width="40"
        height="40"
      >
        <circle cx="12" cy="12" r="10" stroke="none" fill="#000" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      {itemCount > 0 && (
        <div style={styles.badgeContainer}>
          <p style={styles.badge}><strong>{itemCount}</strong></p>
        </div>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    position: "relative",
    cursor: "pointer",
  },
  badgeContainer: {
    
    position: "absolute",
    top: "-10px",
    right: "-10px",
  },
  badge: {
    textAlign:'center',
    borderRadius: "50%",
    backgroundColor: "#ff0000",
    color: "#fff",
    width: "30px",
    height: "30px",
  },
};

export default CartIcon;
