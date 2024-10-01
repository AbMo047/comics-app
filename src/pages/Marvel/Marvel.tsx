/*eslint no-unused-vars: "off"*/

import React from 'react';
import ComicPreview from '../../components/ComicPreview/ComicPreview';
import Form from '../../components/Form/Form';
import type { Comic } from '../../types/comic';
import styles from './Marvel.module.css';

type MarvelPageProps = {
  comics: Comic[];
  selectedComic: Comic | null;
  backgroundColor: string;
  dropShadow: string;
  textColor: string;
  message: string;
  favoriteComics: Comic[];
  handleSelectComic: (index: number) => void;
  handleAddToFavorites: (e: React.FormEvent) => void;
  handleFavoriteClick: (comic: Comic) => void;
  setBackgroundColor: (color: string) => void;
  setDropShadow: (shadow: string) => void;
  setMessage: (message: string) => void;
  setTextColor: (color: string) => void;
  successMessage: string | null;
};

const MarvelPage: React.FC<MarvelPageProps> = ({
  comics,
  selectedComic,
  backgroundColor,
  dropShadow,
  message,
  textColor,
  handleSelectComic,
  handleAddToFavorites,
  setBackgroundColor,
  setDropShadow,
  setMessage,
  setTextColor,
  successMessage,
}) => {
  return (
    <div className={styles.marvelPage}>
      <div className={styles.formContainer}>
        <Form
          comics={comics}
          handleSelectComic={handleSelectComic}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          dropShadow={dropShadow}
          textColor={textColor}
          setTextColor={setTextColor}
          setDropShadow={setDropShadow}
          message={message}
          setMessage={setMessage}
          handleAddToFavorites={handleAddToFavorites}
          selectedComic={selectedComic}
        />
      </div>

      {selectedComic && (
        <div className={styles.comicPreviewContainer}>
          <ComicPreview
            comic={selectedComic}
            backgroundColor={backgroundColor}
            message={message}
            dropShadow={dropShadow}
            textColor={textColor}
          />
        </div>
      )}
      {successMessage && (
        <div className={styles.successMessage}>{successMessage}</div>
      )}
    </div>
  );
};

export default MarvelPage;
