<template>
  <main-header />
  <sub-header
    heading="#stayintouch"
    subHeading="With our 24/7 hotlines we will attend to you."
  />
  <div class="container">
    <div class="map-section">
      <div class="map-details">
        <span>Get in touch</span>
        <h3>Visit one of our agency locations or contact us today</h3>
        <h4>Head Office</h4>
        <ul>
          <li>
            <i class="fal fa-map"></i>
            <p>56 Glassfor Street Glasgow G1 1UL New York</p>
          </li>
          <li>
            <i class="far fa-envelope"></i>
            <p>buyit@gmail.co.uk</p>
          </li>
          <li>
            <i class="fas fa-phone-alt"></i>
            <p>+01-2222-365/+01-2343-563</p>
          </li>
          <li>
            <i class="far fa-clock"></i>
            <p>Monday to Saturday: 8:00am to 8:00pm</p>
          </li>
        </ul>
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143322.8742573402!2d-4.37254028755512!3d55.855380652686954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C%20UK!5e0!3m2!1sen!2sus!4v1651228491855!5m2!1sen!2sus"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <div class="form-section">
      <form>
        <span>Leave a message</span>
        <h3>We love to hear from you</h3>

        <div class="form-control">
          <input type="text" placeholder="Your name" required />
        </div>
        <div class="form-control">
          <input type="email" placeholder="E-mail" required />
        </div>
        <div class="form-control">
          <input type="text" placeholder="Subject" required />
        </div>
        <div class="form-control">
          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
        </div>
        <action-button btnvalue="Submit" />
      </form>
      <div class="employers-section">
        <div
          class="employer"
          v-for="(employer, index) in employers"
          :key="index"
        >
          <div class="employer-img">
            <img :src="employer.image" :alt="employer.name" />
          </div>
          <div class="employer-info">
            <h4>{{ employer.name }}</h4>
            <p>{{ employer.position }}</p>
            <p>Phone: {{ employer.phone }}</p>
            <p>Email: {{ employer.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main-footer />
</template>


<script>
import SubHeader from "@/components/SubHeader.vue";
import ActionButton from "@/components/ActionButton.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
  components: { SubHeader, ActionButton, MainHeader, MainFooter },
  name: "ContactView",
  data() {
    return {
      employers: [
        {
          image: require("@/assets/images/people/1.png"),
          name: "Mark Franklin",
          position: "Chief Execution Officer (CEO)",
          phone: "+1-305-984-5462",
          email: "contact@gmail.com",
        },
        {
          image: require("@/assets/images/people/2.png"),
          name: "William Smith",
          position: "Senior Marketing Manager",
          phone: "+1-305-753-3668",
          email: "contact@yahoo.com",
        },
        {
          image: require("@/assets/images/people/3.png"),
          name: "Emma Stone",
          position: "Warehouse Manager",
          phone: "+1-305-484-7492",
          email: "contact@gmail.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Map */
.map-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3rem;
}

.map-details {
  width: 40%;
}

span {
  text-transform: uppercase;
  font-size: 1.5rem;
}

.map-details h3 {
  padding-block: 2rem;
  font-size: 2.7rem;
  line-height: 35px;
}

.map-details h4 {
  font-size: 1.6rem;
  padding-bottom: 1rem;
}

li {
  display: flex;
  align-items: center;
  gap: 2rem;
}

li i {
  font-size: 1.4rem;
}

.map {
  width: 55%;
  height: 400px;
}

.map iframe {
  width: 100%;
  height: 100%;
}

/* Form */

.form-section {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-block: 5rem;
  gap: 3rem;
}

form {
  width: 70%;
}

form h3 {
  padding-block: 2rem;
}

.form-control {
  padding-bottom: 2rem;
}
input,
textarea {
  width: 100%;
  border: 1px solid lightgrey;
}

input:hover,
textarea:hover {
  outline: none;
  border: 1px solid black;
}

/* Employers section */
.employer {
  display: flex;
  gap: 2rem;
  padding-bottom: 2.5rem;
}

.employer-img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}

.employer-img img {
  max-width: 100%;
  height: auto;
}

.employer-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.employer-info h4 {
  font-weight: 500;
  font-size: 2rem;
}

.employer-info p {
  padding: 0;
  font-size: 1.5rem;
}

@media (max-width: 799px) {
  form {
    width: 50%;
  }
}
@media (max-width: 599px) {
  .map-section {
    flex-direction: column;
  }
  .map-details,
  .map,
  form {
    width: 100%;
  }

  form h3 {
    font-size: 2.7rem;
  }

  .form-section {
    flex-direction: column;
    gap: 3rem;
  }
}
</style>