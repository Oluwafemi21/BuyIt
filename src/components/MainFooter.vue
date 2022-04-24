<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="footer-col">
          <router-link to="/">
            <h3 class="logo">Buy-It</h3>
          </router-link>
          <h4>Contact</h4>
          <span>
            <strong>Address: </strong>562 Wellington Road, Street 32, San
            Francisco
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
        <div class="footer-col">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div class="apps">
            <button>Download on the <br /><strong>App Store</strong></button>
            <button>Google Play</button>
          </div>
          <p>Secured Payment Gateways</p>
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
}

.footer .logo {
  padding-bottom: 2rem;
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

.copyright {
  font-size: 1.7rem;
  width: 100%;
  text-align: center;
}

.copyright span {
  font-weight: 700;
  color: #42b883;
}
</style>