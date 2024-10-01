import React from 'react';
import { useParams } from 'react-router-dom';
import type { Comic } from '../../types/comic';
import styles from './ComicDetails.module.css';

type ComicDetailsProps = {
  comics: Comic[];
};

const ComicDetails: React.FC<ComicDetailsProps> = ({ comics }) => {
  const { id } = useParams<{ id: string }>();
  const comic = comics.find((comic) => comic.id === parseInt(id || '', 10));

  if (!comic) {
    return <div className={styles.errorMessage}>Comic not found</div>;
  }

  return (
    <div className={styles.comicDetails}>
      <div className={styles.comicImage}>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
        />
      </div>
      <div className={styles.comicInfo}>
        <h1 className={styles.comicTitle}>{comic.title}</h1>
        {comic.description ? (
          <p className={styles.comicDescription}>{comic.description}</p>
        ) : (
          <p className={styles.comicDescription}>No description available.</p>
        )}
        {comic.pageCount && (
          <p className={styles.comicPageCount}>Page Count: {comic.pageCount}</p>
        )}
        {comic.issueNumber && (
          <p className={styles.comicIssueNumber}>
            Issue Number: {comic.issueNumber}
          </p>
        )}
      </div>
    </div>
  );
};

export default ComicDetails;
