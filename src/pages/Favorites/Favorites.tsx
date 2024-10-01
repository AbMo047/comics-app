import React from 'react';
import Favorites from '../../components/Favorites/Favorites';
import type { Comic } from '../../types/comic';

type FavoritesPageProps = {
  favoriteComics: Comic[];
  handleFavoriteClick: (comic: Comic) => void;
  handleRemoveFromFavorites: (comic: Comic) => void;
};

const FavoritesPage: React.FC<FavoritesPageProps> = ({
  favoriteComics,
  handleFavoriteClick,
  handleRemoveFromFavorites,
}) => {
  return (
    <Favorites
      favoriteComics={favoriteComics}
      handleFavoriteClick={handleFavoriteClick}
      handleRemoveFromFavorites={handleRemoveFromFavorites}
    />
  );
};

export default FavoritesPage;
