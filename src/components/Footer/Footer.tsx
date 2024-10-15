import React from 'react';
import styles from './Footer.module.css';
import MarvelLogo from '../../assets/m-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faTumblr,
  faYoutube,
  faSnapchat,
  faPinterest,
  faTiktok,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';

const socialMediaLinks = [
  { href: 'https://www.facebook.com', icon: faFacebook },
  { href: 'https://www.x.com', icon: faXTwitter },
  { href: 'https://www.instagram.com', icon: faInstagram },
  { href: 'https://www.tumblr.com', icon: faTumblr },
  { href: 'https://www.youtube.com', icon: faYoutube },
  { href: 'https://www.snapchat.com', icon: faSnapchat },
  { href: 'https://www.pinterest.com', icon: faPinterest },
  { href: 'https://www.tiktok.com', icon: faTiktok },
];

const footerLinks = [
  {
    title: 'About Marvel',
    links: [
      { text: 'About Marvel', href: 'about-marvel' },
      { text: 'Help', href: 'help' },
      { text: 'Careers', href: 'careers' },
      { text: 'Internships', href: 'internships' },
    ],
  },
  {
    title: 'Marvel Services',
    links: [
      { text: 'Advertising', href: 'advertising' },
      { text: 'Disney+', href: 'https://www.disneyplus.com/nl-be' },
      { text: 'MarvelHQ.com', href: 'https://www.marvelhq.com/' },
      { text: 'Redeem Digital Codes', href: 'redeem' },
    ],
  },
  {
    title: 'Marvel Insider',
    links: [
      { text: 'Marvel Insider', href: 'marvel-insider' },
      { text: 'Get Rewarded for Being a Marvel Fan', href: '/fan' },
      { text: 'Marvel Unlimited', href: 'marvel-unlimited' },
      { text: 'Access Over 30,000+ Digital Comics', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.logoSection}>
          <img src={MarvelLogo} alt="Marvel Logo" className={styles.logo} />
        </div>
        <div className={styles.footerLinks}>
          {footerLinks.map((section, index) => (
            <ul key={index} className={styles.footerMenu}>
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          ))}
          <div className={styles.socialMediaIcons}>
          <ul className={styles.socialMedia}>
            {socialMediaLinks.map((social, index) => (
              <li key={index}>
                <a target="_blank" rel="noopener noreferrer" href={social.href}>
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Your US State Privacy Rights</li>
          <li>Do Not Sell or Share My Personal Information</li>
          <li>Children&apos;s Online Privacy Policy</li>
          <li>License Agreement</li>
          <li>Interest-Based Ads</li>
        </ul>
        <p>© 2024 MARVEL</p>
      </div>
    </footer>
  );
};

export default Footer;
