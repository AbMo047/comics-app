import { useState, useEffect } from 'react';
import { fetchComics } from '../services/marvelApiService';
import type { Comic } from '../types/comic';
export const useMarvelAPI = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadComics = async () => {
      try {
        setLoading(true);
        const storedComics = localStorage.getItem('comics');
        if (storedComics) {
          setComics(JSON.parse(storedComics));
        } else {
          const fetchedComics = await fetchComics();
          setComics(fetchedComics);
          localStorage.setItem('comics', JSON.stringify(fetchedComics));
        }
      } catch (error: unknown) {
        setError('Failed to load comics');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadComics();
  }, []);

  return { comics, loading, error };
};
