import React from 'react';
import type { Comic } from '../../types/comic';
import styles from './Form.module.css';

type FormProps = {
  comics: Comic[];
  handleSelectComic: (index: number) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  dropShadow: string;
  setDropShadow: (shadow: string) => void;
  message: string;
  setMessage: (message: string) => void;
  textColor: string;
  setTextColor: (color: string) => void;
  handleAddToFavorites: (e: React.FormEvent) => void;
  selectedComic: Comic | null;
};

const Form: React.FC<FormProps> = ({
  comics,
  handleSelectComic,
  backgroundColor,
  setBackgroundColor,
  dropShadow,
  setDropShadow,
  message,
  setMessage,
  handleAddToFavorites,
  textColor,
  setTextColor,
  selectedComic,
}) => (
  <div className={styles.formContainer}>
    <form className={styles.form} onSubmit={handleAddToFavorites}>
      <label htmlFor="comicSelect">Choose Comic Edition</label>
      <select
        id="comicSelect"
        onChange={(e) => handleSelectComic(parseInt(e.target.value))}
      >
        <option value="">Select a comic</option>
        {comics.map((comic, index) => (
          <option key={comic.id} value={index}>
            {comic.title}
          </option>
        ))}
      </select>

      <label htmlFor="backgroundColor">Background Color</label>
      <input
        id="backgroundColor"
        type="color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      />

      <label htmlFor="dropShadow">Drop Shadow</label>
      <input
        id="dropShadow"
        type="text"
        value={dropShadow}
        onChange={(e) => setDropShadow(e.target.value)}
        placeholder="e.g. 5px 5px 10px rgba(0, 0, 0, 0.5)"
      />

      <label htmlFor="textColor">Text Color</label>
      <input
        id="textColor"
        type="color"
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
      />

      <label htmlFor="message">Message</label>
      <input
      className={styles.message}
        id="message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />

      <button type="submit" className={styles.button} disabled={!selectedComic}>
        Add to Favorites
      </button>
    </form>
  </div>
);

export default Form;
