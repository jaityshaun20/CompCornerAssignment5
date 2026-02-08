import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>{props.storeName}</h3>
        <p>{props.description}</p>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
      </div>

      <div className="footer-section">
        <h4>Location</h4>
        <p>{props.address}</p>
      </div>
    </footer>
  );
}

export default Footer;