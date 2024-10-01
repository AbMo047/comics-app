import React from 'react';
import type { Comic } from '../../types/comic';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Favorites.module.css';

type FavoritesProps = {
  favoriteComics: Comic[];
  handleFavoriteClick: (comic: Comic) => void;
  handleRemoveFromFavorites: (comic: Comic) => void;
};

const Favorites: React.FC<FavoritesProps> = ({
  favoriteComics,
  handleFavoriteClick,
  handleRemoveFromFavorites,
}) => {
  const navigate = useNavigate();

  const handleClick = (comic: Comic) => {
    handleFavoriteClick(comic);
    navigate(`/comic/${comic.id}`);
  };

  return (
    <div className={styles.favoriteContainer}>
      <h2 className={styles.header}>Favorite Comics</h2>

      {favoriteComics.length === 0 ? (
        <p className={styles.noFavoritesMessage}>
          You have no favorite comics yet. Add some to your favorites list!
          <br></br>
          <Link to="/" className={styles.addLink}>
            Click here to add one!
          </Link>
        </p>
      ) : (
        <ul className={styles.favoritesList}>
          {favoriteComics.map((comic) => (
            <li
              key={comic.id}
              className={styles.favoriteComicItem}
              style={{
                backgroundColor: comic.backgroundColor,
                color: comic.textColor,
                boxShadow: comic.dropShadow,
              }}
            >
              <div
                className={styles.comicContent}
                onClick={() => handleClick(comic)}
              >
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                  className={styles.favoriteComicImage}
                />
                <div className={styles.favoriteComicInfo}>
                  <span>{comic.title}</span>
                  <p>{comic.message || ''}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromFavorites(comic)}
                className={styles.removeButton}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
