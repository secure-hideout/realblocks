import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleNavItemClick = () => {
      setIsOpen(false);
    };

    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <header className={`${styles.header} ${isHeaderActive ? styles.active : ''}`}  data-header>

{isOpen && <div className={styles.overlay} data-overlay onClick={closeNav}></div>}

    <div className={styles.headerBottom}>
      <div className={styles.container}>

        <a href="#" className={styles.logo}>
          <img src="/logo-01.png" alt="realblocks logo"  />
        </a>

        <nav className={styles.navbar} data-navbar>

          <div className={styles.navbarTop}>

            <a href="#" className={styles.logo}>
              <img src="/logo-01.png" alt="realblocks logo" />
            </a>

            <button className={styles.navCloseBtn} data-nav-close-btn aria-label="Close Menu">
              <ion-icon name="close-outline"></ion-icon>
            </button>

          </div>

          <div className={styles.navbarBottom}>
            <ul className={styles.navbarList}>

              <li>
                <a href="#home" className={styles.navbarLink} data-nav-link>Home</a>
              </li>

              <li>
                <a href="#about" className={styles.navbarLink} data-nav-link>About</a>
              </li>

              <li>
                <a href="#service" className={styles.navbarLink} data-nav-link>Service</a>
              </li>

              <li>
                <a href="#property" className={styles.navbarLink} data-nav-link>Property</a>
              </li>

              <li>
                <a href="#blog" className={styles.navbarLink} data-nav-link>Blog</a>
              </li>

              <li>
                <a href="#contact" className={styles.navbarLink} data-nav-link>Contact</a>
              </li>

            </ul>
          </div>

        </nav>

        <div className={styles.headerBottomActions}>

          <button className={styles.headerBottomActionsBtn} aria-label="Search">
            <ion-icon name="search-outline"></ion-icon>

            <span>Search</span>
          </button>

          <button className={styles.headerBottomActionsBtn} aria-label="Profile">
            <ion-icon name="person-outline"></ion-icon>

            <span>Profile</span>
          </button>

          <button className={styles.headerBottomActionsBtn} aria-label="Cart">
            <ion-icon name="cart-outline"></ion-icon>

            <span>Cart</span>
          </button>

          <button className={styles.headerBottomActionsBtn} data-nav-open-btn aria-label="Open Menu">
            <ion-icon name="menu-outline"></ion-icon>

            <span>Menu</span>
          </button>

        </div>

      </div>
    </div>

  </header>


  );
};

export default Header;