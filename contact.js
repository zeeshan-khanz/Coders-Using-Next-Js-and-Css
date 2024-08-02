import Head from 'next/head';
import styles from '../styles/ContactUs.module.css';

const ContactUs = () => {
  return (
   <div>
  <section id={styles.contact}>
    <h4>HAVE ANY QUESTION?</h4>
    <h1>Contact Us</h1>
    <div className={styles.mainform}>
      <input type="text" name="name" id="name" placeholder="Your Name" />
      <input type="email" name="email" id="email" placeholder="Enter Your Email" />
      <input type="tel" name="phone" id="phone" placeholder="Your Phone Number" />
      <textarea name="message" id="textarea" cols="30" rows="10" placeholder="Write Your Message Here"></textarea>
      <button className={styles.bgredbtn}>Send</button>
    </div>
  </section>
</div>

  );
};

export default ContactUs;