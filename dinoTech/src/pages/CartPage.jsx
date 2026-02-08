//CartPage.jsx
import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart, total }) {
  return (
    <div>
      <h2>Your Cart</h2>

      <div className="cart-list">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item,index) => (
            <CartItem 
              key={`${item.id}-${index}`}
              item={item}
              onRemove={removeFromCart}
            />
          ))
        )}
      </div>

      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default CartPage;
