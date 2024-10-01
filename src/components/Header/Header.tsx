import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import MarvelLogo from '../../assets/marvel-logo.png';
import DisneyLogo from '../../assets/disney-logo.png';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.topBar}>
      <div className={styles.topLeft}>
        <ul className={styles.navMenu}>
          <li>
            <Link to="login">Log In</Link>
          </li>
          <li>
            <Link to="register">Register</Link>
          </li>
        </ul>
      </div>
      <div className={styles.topCenter}>
        <Link to="/">
          <img src={MarvelLogo} alt="Marvel Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.topRight}>
        <ul className={styles.navMenu}>
          <li>
            <Link to="/subscription">Marvel Unlimited Subscribe</Link>
          </li>
        </ul>
        <div className={styles.searchIcon} />
      </div>
    </div>

    <nav className={styles.navBar}>
      <ul className={styles.navMenu}>
        <li>
          <Link to="/">Comics</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
      <div className={styles.promoBanner}>
        STREAM X-MEN '97 EXCLUSIVELY ON
        <img src={DisneyLogo} alt="Disney+" className={styles.disneyLogo} />
      </div>
    </nav>
  </header>
);

export default Header;
