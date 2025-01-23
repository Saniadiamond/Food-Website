import React, { useEffect, useState } from "react";
// import './css/phone.css'
import './css/style.css'

function Food() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "./img/food-order.jpg",
      title: "Delicious Food Delivered",
      description: "Experience the best taste at your doorstep"
    },
    {
      image: "./img/ulter.jpg",
      title: "Fresh & Healthy",
      description: "Quality ingredients for quality taste"
    },
    {
      image: "./img/food-delievery.jpg",
      title: "Fast Delivery",
      description: "Quick and reliable service"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <div className="header container-fluid">
        <nav id="navbar">
          <div id="logo">
            <img src="./img/food log2.jpg" alt="Food Logo" />
          </div>
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#services-container">Services</a>
            </li>
            <li className="nav-item">
              <a href="#voucher-section">Voucher</a>
            </li>
            <li className="nav-item">
              <a href="#order" className="order-btn">Order Now</a>
            </li>
          </ul>
        </nav>
        <section id="home">
          <div className="slider-container">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="slide-content">
                  <h1 className="primary">{slide.title}</h1>
                  <p>{slide.description}</p>
                  <button className="btn">Order Now</button>
                </div>
              </div>
            ))}
            <button className="slider-btn prev" onClick={prevSlide}>❮</button>
            <button className="slider-btn next" onClick={nextSlide}>❯</button>
            <div className="slider-dots">
              {slides.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </section>
        <hr />
        <div id="services-container">
          <h1 className="h-primary">Our Services</h1>
          <div id="services">
            <div className="service-card">
              <div className="card-image">
                <img src="./img/food-order.jpg" alt="Menu" />
                <h2>MENU</h2>
                <button className="card-btn">VIEW MENU</button>
              </div>
            </div>
            <div className="service-card">
              <div className="card-image">
                <img src="./img/ulter.jpg" alt="Catering" />
                <h2>CATERING</h2>
                <button className="card-btn">ORDER CATERING</button>
              </div>
            </div>
            <div className="service-card">
              <div className="card-image">
                <img src="./img/location.jpg" alt="Locations" />
                <h2>LOCATIONS</h2>
                <button className="card-btn">FIND US</button>
              </div>
            </div>
            <div className="service-card">
              <div className="card-image">
                <img src="./img/serve.jpg" alt="Our Story" />
                <h2>OUR STORY</h2>
                <button className="card-btn">READ MORE</button>
              </div>
            </div>
            <div className="service-card">
              <div className="card-image">
                <img src="./img/7th.jpg" alt="Special Deals" />
                <h2>SPECIAL DEALS</h2>
                <button className="card-btn">VIEW DEALS</button>
              </div>
            </div>
            <div className="service-card">
              <div className="card-image">
                <img src="./img/6th.jpg" alt="Fresh Food" />
                <h2>FRESH FOOD</h2>
                <button className="card-btn">EXPLORE MENU</button>
              </div>
            </div>
            <div className="service-card">
              <div className="card-image">
                <img src="./img/8th.jpg" alt="Fast Delivery" />
                <h2>FAST DELIVERY</h2>
                <button className="card-btn">ORDER NOW</button>
              </div>
            </div>
            <div className="service-card">
              <div className="card-image">
                <img src="./img/like.jpg" alt="Customer Reviews" />
                <h2>REVIEWS</h2>
                <button className="card-btn">READ REVIEWS</button>
              </div>
            </div>
            
            
          </div>
        </div>

        <section id="voucher-section">
          <div className="voucher-container">
            <div className="voucher-left">
              <div className="voucher-card">
                <div className="voucher-ribbon-top">
                  <img src="./img/gold-ribbon.jpg" alt="ribbon" className="ribbon-img" />
                </div>
                <h2>Food Cooks<br />e-Voucher</h2>
                <div className="voucher-ribbon-bottom">
                  <img src="./img/gold-ribbon.jpg" alt="ribbon" className="ribbon-img" />
                </div>
                <div className="terms-conditions">
                  <h3>Food Cooks e-Voucher Terms and Conditions</h3>
                  <ol>
                    <li>This voucher is to be used within the stipulated period printed on this voucher.</li>
                    <li>This voucher is valid only with Food Cooks and its value is equivalent to the currency as printed.</li>
                    <li>This voucher cannot be used in conjunction with other promotions coupon.</li>
                    <li>This voucher is not refundable and cannot be replaced if lost, damaged, or expired.</li>
                    <li>This voucher is not refundable or exchangeable for cash and any unused balance will not be refunded.</li>
                    <li>This voucher is not legal tender and cannot be deposited into any bank account.</li>
                    <li>Food Cooks reserves the right to vary or amend the privileges or terms and conditions without prior notice.</li>
                    <li>This voucher is applicable for dine-in only. Reservation is required to avail voucher.</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="voucher-right">
              <h2 className="section-title">e-Voucher</h2>
              <p className="voucher-description">
                You can't go wrong with an e-Voucher. Choose an amount and write a personalized message to make this e-Voucher your own. Terms and Conditions Apply.
              </p>
              
              <div className="voucher-form">
                <div className="form-group">
                  <label>Denomination</label>
                  <div className="denomination-buttons">
                    <button className="denomination-btn active">$50</button>
                    <button className="denomination-btn">$100</button>
                    <button className="denomination-btn">$150</button>
                    <button className="denomination-btn">$200</button>
                    <button className="denomination-btn">$300</button>
                    <button className="denomination-btn">$500</button>
                  </div>
                </div>

                <div className="form-group">
                  <label>Quantity</label>
                  <div className="quantity-input">
                    <button className="quantity-btn">-</button>
                    <input type="number" value="1" min="1" />
                    <button className="quantity-btn">+</button>
                  </div>
                </div>

                <div className="form-group">
                  <label>Who's the e-Voucher for?</label>
                  <div className="voucher-type-buttons">
                    <button className="type-btn active">For someone else</button>
                    <button className="type-btn">For myself</button>
                  </div>
                </div>

                <div className="form-group">
                  <label>Recipient email *</label>
                  <input type="email" required />
                </div>

                <div className="form-group">
                  <label>Recipient name</label>
                  <input type="text" />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="4"></textarea>
                </div>

                <button className="submit-btn">Purchase Voucher</button>
              </div>
            </div>
          </div>
        </section>

        <div className="animated-images">
          <div className="image-container">
            <img src="./img/ice.webp" alt="Food Delivery" className="floating-img" />
            <img src="./img/shake.jpg" alt="Food Service" className="floating-img" />
            <img src="./img/gulaab.webp" alt="Food Order" className="floating-img" />
            <img src="./img/bread.jpg" alt="Food Logo" className="floating-img" />
          </div>
        </div>

        <footer className="footer-section">
          <div className="footer-container">
            <div className="footer-left">
              <div className="footer-logo">
                <img src="./img/food log2.jpg" alt="Food Logo" />
                <h2>Food Cooks</h2>
              </div>
              <div className="social-links">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-pinterest-p"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
              </div>
              <div className="footer-cta">
                <a href="#" className="cta-button">
                  Visit our Other Site:
                  <span>Craving Home Cooked</span>
                </a>
              </div>
            </div>
            
            <div className="footer-nav">
              <div className="footer-column">
                <h3>Explore</h3>
                <ul>
                  <li><a href="#">Recipes</a></li>
                  <li><a href="#">Cookbooks</a></li>
                  <li><a href="#">About Jo</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h3>Legal</h3>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Accessibility</a></li>
                  <li><a href="#">Disclaimers</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Food Cooks</p>
            <a href="#" className="site-credits">Site Credits</a>
            <a href="#" className="back-to-top">
              Back to Top <i className="fas fa-arrow-up"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Food;
