//Hero.jsx
import "./Hero.css";

function Hero(props) {
  return (
    <section className="hero">
      <img 
        src="https://placehold.co/1200x400/667eea/ffffff?text=DinoTech+Store" 
        alt="DinoTech Banner"
        className="hero-image"
      />

      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <button onClick={props.onCtaClick}>
          {props.ctaText}
        </button>
      </div>
    </section>
  );
}

export default Hero;