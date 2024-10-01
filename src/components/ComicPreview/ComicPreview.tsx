import React from 'react';
import styles from './ComicPreview.module.css';
import { Comic } from '../../types/comic';
interface ComicPreviewProps {
  comic: Comic;
  backgroundColor: string;
  dropShadow: string;
  message: string;
  textColor: string;
}

const ComicPreview: React.FC<ComicPreviewProps> = ({
  comic,
  backgroundColor,
  dropShadow,
  message,
  textColor,
}) => {
  return (
    <div
      className={styles.ComicPreview}
      style={{ backgroundColor, boxShadow: dropShadow }}
    >
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        className={styles.thumbnail}
      />
      <h2 style={{ color: textColor }}>{comic.title}</h2>
      {message && <p style={{ color: textColor }}>{message}</p>}
    </div>
  );
};

export default ComicPreview;
