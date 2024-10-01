import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { md5 } from 'js-md5';
import type { Comic } from '../../types/comic';

const ComicsList: React.FC = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const ts = new Date().getTime().toString();
        const publicKey = '11f8e26326d20938105e848327b174a5';
        const privateKey = '146567fa64d167262bdaad1ee8dba9fcca4e4381';

        const hash = md5(ts + privateKey + publicKey);

        const url = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        const response = await axios.get(url);
        setComics(response.data.data.results);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Comics List</h1>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>
            <h2>{comic.title}</h2>
            <img
              className="picture"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComicsList;
