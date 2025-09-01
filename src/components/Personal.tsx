import React, { useEffect, useState } from 'react';
import './Personal.css';

const Personal: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [shows, setShows] = useState<any[]>([]);
  const [isMoviesExpanded, setIsMoviesExpanded] = useState(false);
  const [isShowsExpanded, setIsShowsExpanded] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieTitles = [
        { title: 'Alien', year: 1979 },
        { title: 'Kickboxer', year: 1989 },
        { title: 'Basic Instinct' },
        { title: 'The Mask' },
        { title: 'The Shawshank Redemption' },
        { title: 'Forrest Gump' },
        { title: 'Legends of the Fall' },
        { title: 'Heat' },
        { title: 'Jerry Maguire' },
        { title: 'Titanic' },
        { title: "The Devil's Advocate", year: 1997 },
        { title: 'Notting Hill' },
        { title: 'The Matrix' },
        { title: 'Gladiator' },
        { title: 'Black Hawk Down' },
        { title: 'A Beautiful Mind' },
        { title: 'City of God' },
        { title: 'The Curious Case of Benjamin Button' },
        { title: 'Django Unchained' },
        { title: 'The Conjuring' },
        { title: 'Son of God' },
        { title: 'Mad Max: Fury Road' },
        { title: 'Point Break', year: 2015 },
        { title: 'O Máskara' },
        { title: 'Me Before You' },
        { title: 'The Boy Who Harnessed the Wind' },
        { title: 'Miracle in Cell No. 7' },
        { title: 'Joker' },
        { title: '7 Prisoners' },
        { title: 'Society of the Snow' }
      ];

      const apiKey = '22f13f96';
      const fetchedMovies = await Promise.all(
        movieTitles.map(async ({ title, year }) => {
          let url = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;
          if (year) {
            url += `&y=${year}`;
          }
          const response = await fetch(url);
          const data = await response.json();
          console.log(`Fetched movie:`, data); // Log the fetched movie data
          return data;
        })
      );

      setMovies(fetchedMovies);
    };

    const fetchShows = async () => {
      const showTitles = [
        { title: 'Lois & Clark: The New Adventures of Superman' },
        { title: 'The Office', imdbID: 'tt0386676' },
        { title: 'Spartacus' },
        { title: 'Game of Thrones' },
        { title: 'Outlander' },
        { title: 'Daredevil' },
        { title: 'Verdades Secretas' },
        { title: 'Lucifer' },
        { title: 'The Girlfriend Experience' },
        { title: 'You' },
        { title: 'Sex Education' },
        { title: 'La Révolution' },
        { title: 'Lupin' },
        { title: 'Dom' },
        { title: 'Sex/Life' },
        { title: 'Mob Land', imdbID: 'tt31510819' },
        { title: 'Money Heist', imdbID: 'tt6468322' },
        { title: 'The Penguin', imdbID: 'tt15435876' },
        { title: 'Criminal Code', imdbID: 'tt22459586' },
        { title: 'Roman Empire', imdbID: 'tt6233538' },
        { title: 'Masters of the Universe: Revelation', imdbID: 'tt10826054' }
      ];

      const apiKey = '22f13f96';
      const fetchedShows = await Promise.all(
        showTitles.map(async ({ title }) => {
          const url = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;
          const response = await fetch(url);
          const data = await response.json();
          if (!data || data.Response === 'False') {
            console.error(`Error fetching show: ${title}`, data?.Error || 'Unknown error');
          } else {
            console.log(`Fetched show:`, data); // Log the fetched show data
          }
          return data;
        })
      );

      setShows(fetchedShows);
    };

    fetchMovies();
    fetchShows();
  }, []);

  return (
    <section id="personal" className="personal-container">
      <h1 className="personal-title">Personal</h1>
      <button
        onClick={() => setIsMoviesExpanded(!isMoviesExpanded)}
        className="personal-toggle"
        aria-expanded={isMoviesExpanded}
        aria-controls="movie-list"
      >
        My Favorite Movies {isMoviesExpanded ? '-' : '+'}
      </button>
      {isMoviesExpanded && (
        <ol id="movie-list" className="movie-list">
          {movies.map((movie, index) => (
            <li key={movie.imdbID || index} className="movie-item">
              {movie.Poster && <img src={movie.Poster} alt={movie.Title} className="movie-poster" />} 
              {movie.Title && <span className="movie-title">{movie.Title}</span>} 
              {movie.Year && <span className="movie-year">({movie.Year})</span>}
            </li>
          ))}
        </ol>
      )}

      <button
        onClick={() => setIsShowsExpanded(!isShowsExpanded)}
        className="personal-toggle"
        aria-expanded={isShowsExpanded}
        aria-controls="show-list"
      >
        My Favorite Shows {isShowsExpanded ? '-' : '+'}
      </button>
      {isShowsExpanded && (
        <ol id="show-list" className="show-list">
          {shows.map((show, index) => (
            <li key={show.imdbID || index} className="show-item">
              {show.Poster && <img src={show.Poster} alt={show.Title} className="show-poster" />} 
              {show.Title && <span className="show-title">{show.Title}</span>} 
              {show.Year && <span className="show-year">({show.Year})</span>}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
};

export default Personal;
