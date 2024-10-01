import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notFound.module.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404 - Pagina Niet Gevonden</h1>
      <p className={styles.notFoundText}>
        Sorry, de pagina die je zoekt bestaat niet.
      </p>
      <Link to="/" className={styles.notFoundLink}>
        Ga terug naar de homepagina
      </Link>
    </div>
  );
};

export default NotFoundPage;
