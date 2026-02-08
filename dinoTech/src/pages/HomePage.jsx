//HomePage.jsx
import Hero from "../components/Hero"        
import { useNavigate } from "react-router-dom"

function HomePage(){
    const navigate = useNavigate();

    return (
        <div>
            <Hero 
                title="Welcome to dinoTech"
                subtitle="Future-Ready Technology Store"
                ctaText="Shop Now"
                onCtaClick={() => navigate("/products")}
            />

            <section className="home-intro">
                <h2>Why Shop With Us?</h2>
                <p>
                    At DinoTech, we’re passionate about bringing you cutting-edge technology that fits your lifestyle and your budget. 
                    Our goal is to make tech shopping simple, accessible, and enjoyable for everyone. Whether you’re upgrading your setup, 
                    looking for premium accessories, or exploring the latest next-gen devices, we carefully curate our products to ensure quality, 
                    performance, and reliability. We pride ourselves on affordable pricing, fast delivery, and a seamless shopping experience 
                    from the moment you land on our site to the moment your order arrives at your door.
                </p>
            </section>
        </div>
    );
}
export default HomePage;