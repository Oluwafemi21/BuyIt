<template>
  <section class="newsletter">
    <div class="container">
      <div class="newsletter-container">
        <div class="newsletter-heading">
          <h3>Subscribe to Our Newsletters</h3>
          <p>
            To stay up-to-date with our new arrivals and
            <span>coupon giveaways.</span>
          </p>
        </div>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsLetter",
};
</script>

<style scoped>
.newsletter {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dim-blue);
  color: white;
  min-height: 27vh;
}

.newsletter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.newsletter-container p span {
  color: royalblue;
}

form {
  width: 40%;
  position: relative;
}

form input {
  width: 100%;
  padding: 1.6rem 2rem;
  font-size: 1.6rem;
  border-radius: 6px;
  border: none;
  outline: none;
}

form button {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 1.5rem 2.6rem;
  font-size: 1.7rem;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  font-weight: 500;
  color: white;
  background-color: var(--dark-green);
}

form button:hover {
  background-color: var(--grey);
}

@media (max-width: 999px) {
  .newsletter {
    text-align: center;
  }
  .newsletter-container {
    justify-content: center;
  }
  form {
    width: 100%;
  }
}
</style>