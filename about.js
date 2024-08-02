import React from 'react';
import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div className={styles.aboutpage}>
      <div className={styles.imagecontainer}>
        <img src="/z2.avif" alt="About Image" />
      </div>
      <div className={styles.aboutuscontainer}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
    </div>
  );
};

export default About;