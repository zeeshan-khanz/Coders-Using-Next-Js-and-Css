// Navbar.js
import React from 'react';
import styles from "@/styles/Navbar.module.css";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>  
          Z.M 
        </div>
        <ul className={styles.nav}>
          <li>
            <Link href="/Home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;