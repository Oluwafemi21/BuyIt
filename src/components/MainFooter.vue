<template>
  <footer>
    <div class="container">
      <router-link to="/">
        <h3 class="logo">Buy-It</h3>
      </router-link>
      <div class="footer">
        <div class="footer-col">
          <h4>Contact</h4>
          <span>
            <strong>Address: </strong>562 Wellington Road, San Francisco
          </span>
          <span><strong>Phone: </strong>+01-2222-365/+01-2343-563</span>
          <span><strong>Hours: </strong>8:00 - 20:00, Mon - Sat</span>
          <h4>Follow us</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-pinterest-p"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="footer-col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div class="footer-col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div class="apps">
            <a href="/" class="download-btn">
              <i class="fab fa-apple"></i>
              <div class="btn-text">
                <p>Download on <span>Apple Store</span></p>
              </div>
            </a>
            <a href="/" class="download-btn">
              <i class="fab fa-google-play"></i>
              <div class="btn-text">
                <p>Download on <span>Google Play</span></p>
              </div>
            </a>
          </div>
          <p>Secured Payment Gateways</p>
          <div class="payment-methods">
            <i class="fab fa-cc-mastercard"></i>
            <i class="fab fa-cc-visa"></i>
            <i class="fab fa-paypal"></i>
            <i class="fab fa-amazon-pay"></i>
            <i class="fab fa-cc-google-pay"></i>
          </div>
        </div>
        <p class="copyright">
          Buy-It. &copy; 2022. Built by Fexavier with <span>Vue</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style scoped>
.footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-block: 4rem;
  gap: 1.5rem;
}

.logo {
  padding-top: 2rem;
}

.footer-col {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-col h4 {
  padding-bottom: 1.3rem;
}

.footer-col a {
  font-size: 1.6rem;
}

.footer-col a:hover {
  color: #42b883;
}

.footer-col span {
  display: block;
  font-size: 1.6rem;
}
strong {
  color: black;
}

.social-links a {
  padding-right: 1.4rem;
}

.copyright {
  font-size: 1.7rem;
  width: 100%;
  text-align: center;
}

.copyright span {
  font-weight: 700;
  color: #42b883;
}

.install p {
  padding-block: 0;
}

.apps {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.download-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  border: 2px solid #42b883;
  border-radius: 6px;
  padding: 8px;
  text-align: center;
}

.download-btn i {
  font-size: 2rem;
}

.apps a:hover {
  background-color: #42b883;
  color: white;
}

.apps a:hover p {
  color: white;
}

.payment-methods {
  font-size: 2rem;
}
.payment-methods i {
  padding-right: 1.5rem;
  color: black;
}

.payment-methods i:hover {
  cursor: pointer;
  color: #42b883;
}

@media (max-width: 399px) {
  .download-btn p {
    font-size: 1.4rem;
  }
  .download-btn span {
    font-size: 1.4rem;
  }
}

@media (max-width: 345px) {
  .apps {
    display: flex;
    flex-direction: column;
  }
}
</style>