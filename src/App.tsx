import React, { useState, useEffect } from 'react';
import './App.css';
import MarvelPage from './pages/Marvel/Marvel';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComicDetails from './components/ComicDetails/ComicDetails';
import FavoritesPage from './pages/Favorites/Favorites';
import { useMarvelAPI } from './hooks/useMarvelApi';
import type { Comic } from './types/comic';
import Footer from './components/Footer/Footer';
import NotFoundPage from './pages/NotFound/NotFound';
import WelcomeModal from './components/Welcome/Welcome';

const App: React.FC = () => {
  const { comics, loading, error } = useMarvelAPI();
  const [selectedComic, setSelectedComic] = useState<Comic | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [textColor, setTextColor] = useState<string>('#000000');
  const [dropShadow, setDropShadow] = useState<string>(
    '5px 5px 10px rgba(0, 0, 0, 0.5)',
  );
  const [message, setMessage] = useState<string>('');
  const [favoriteComics, setFavoriteComics] = useState<Comic[]>([]); 
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteComics');
    const storedComic = localStorage.getItem('selectedComic');
    const storedBackgroundColor = localStorage.getItem('backgroundColor');
    const storedMessage = localStorage.getItem('message');
    const isFirstVisit = localStorage.getItem('isFirstVisit');

    if (!isFirstVisit) {
      setShowWelcomeModal(true);
      localStorage.setItem('isFirstVisit', 'true');
    }
    if (storedFavorites) {
      setFavoriteComics(JSON.parse(storedFavorites));
    }    
    if (storedComic) {
      setSelectedComic(JSON.parse(storedComic));
    }
    if (storedBackgroundColor) {
      setBackgroundColor(storedBackgroundColor);
    }
    if (storedMessage) {
      setMessage(storedMessage);
    }
  }, []);

  const handleCloseModal = () => {
    setShowWelcomeModal(false);
  };
  const setDefault = () => {
    setBackgroundColor('#ffffff');
    setTextColor('#000000');
    setDropShadow('5px 5px 10px rgba(0, 0, 0, 0.5)');
    setMessage('');
  };

  const handleSelectComic = (index: number) => {
    const comic = comics[index];
    setSelectedComic(comic);
  };

  const handleAddToFavorites = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!selectedComic) {
      console.log('Nothing is selected yet');
      return false;
    }
    const updatedComic = {
      ...selectedComic,
      backgroundColor: backgroundColor,
      textColor: textColor,
      dropShadow: dropShadow,
      message: message,
    };

    const updatedFavorites = [...favoriteComics, updatedComic];
    setFavoriteComics(updatedFavorites);
    localStorage.setItem('favoriteComics', JSON.stringify(updatedFavorites));

    setSuccessMessage(`Added "${selectedComic.title}" to favorites!`);
    setDefault();
    setTimeout(() => setSuccessMessage(null), 3000);
    return false;
  };

  const handleFavoriteClick = (comic: Comic) => {
    setSelectedComic(comic);
  };

  const handleRemoveFromFavorites = (comic: Comic) => {
    const updatedFavorites = favoriteComics.filter(
      (fav) => fav.id !== comic.id,
    );
    setFavoriteComics(updatedFavorites);
    localStorage.setItem('favoriteComics', JSON.stringify(updatedFavorites));

    if (selectedComic && selectedComic.id === comic.id) {
      setSelectedComic(null);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MarvelPage
              comics={comics}
              selectedComic={selectedComic}
              backgroundColor={backgroundColor}
              dropShadow={dropShadow}
              textColor={textColor}
              message={message}
              favoriteComics={favoriteComics}
              handleSelectComic={handleSelectComic}
              handleAddToFavorites={handleAddToFavorites}
              handleFavoriteClick={handleFavoriteClick}
              setBackgroundColor={setBackgroundColor}
              setDropShadow={setDropShadow}
              setMessage={setMessage}
              setTextColor={setTextColor}
              successMessage={successMessage}
            />
          }
        />
        <Route path="/comic/:id" element={<ComicDetails comics={comics} />} />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favoriteComics={favoriteComics}
              handleFavoriteClick={handleFavoriteClick}
              handleRemoveFromFavorites={handleRemoveFromFavorites}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Footer />
      {showWelcomeModal && <WelcomeModal onClose={handleCloseModal} />}
    </Router>
  );
};

export default App;
