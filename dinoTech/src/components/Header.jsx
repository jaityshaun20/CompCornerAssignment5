import './Header.css';
import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header className="app-header">
      <h1 className="logo">dinoTech</h1>

      <nav className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Shop</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
      </nav>

      <div className="header-actions">
        <div className="cart-container">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{cartCount}</span>
        </div>

        <button className="post-btn">New Post</button>
      </div>
    </header>
  );
}

export default Header;